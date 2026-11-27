import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Award, ChevronLeft, ChevronRight, ExternalLink, GraduationCap } from 'lucide-react'

import { certificates } from '../constants/index.js'
import './certificates.css'

// Sidebar ke filter. `key` wahi hona chahiye jo certificate ke `category` mein likha hai.
const CERT_CATEGORIES = [
  { key: 'all', label: 'all' },
  { key: 'webDev', label: 'web development' },
  { key: 'softwareDev', label: 'software development' },
  { key: 'aiMl', label: 'ai & ml' },
  { key: 'design', label: 'design' },
  { key: 'hackathons', label: 'hackathons' },
]

// Ek page par kitne certificates dikhane hain
const PAGE_SIZE = 4

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
}

const Certificates = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [page, setPage] = useState(1)

  const filtered = useMemo(
    () =>
      activeCategory === 'all'
        ? certificates
        : certificates.filter((cert) => cert.category === activeCategory),
    [activeCategory]
  )

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  // Category badalte hi page 1 par wapas, taaki khaali page par na pahunchein
  const changeCategory = (key) => {
    setActiveCategory(key)
    setPage(1)
  }

  const goToPage = (p) => setPage(Math.max(1, Math.min(totalPages, p)))

  return (
    <section className="certificates-section" id="certificates">
      <div className="max-w-7xl mx-auto c-space certificates-layout">
        {/* LEFT: category filters */}
        <div className="cert-sidebar">
          <h3 className="head-text mb-4">Certifications</h3>

          {CERT_CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              className={`cert-sidebar-btn ${activeCategory === cat.key ? 'is-active' : ''}`}
              onClick={() => changeCategory(cat.key)}>
              <span className="cert-sidebar-dot" />
              {cat.label}
            </button>
          ))}
        </div>

        {/* RIGHT: cards + pagination */}
        <div className="cert-main">
          <motion.div
            className="certs-grid"
            // key badalne par grid dobara banta hai, isse cards phir se ek ek karke aate hain
            key={`${activeCategory}-${page}`}
            variants={gridVariants}
            initial="hidden"
            animate="visible">
            {paginated.map((cert) => (
              <motion.div
                key={cert.id}
                className="cert-card"
                variants={cardVariants}
                whileHover={{ y: -4 }}>
                <div className="cert-card-image-wrap">
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={`${cert.title} certificate`}
                      className="cert-card-image"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  ) : (
                    <Award size={28} className="cert-card-image-placeholder" />
                  )}

                  {cert.category && (
                    <span className="cert-badge-pill">
                      {CERT_CATEGORIES.find((c) => c.key === cert.category)?.label || cert.category}
                    </span>
                  )}
                </div>

                <div className="cert-card-body">
                  <h4 className="cert-card-title">{cert.title}</h4>
                  <p className="cert-card-issuer">
                    {cert.issuer} • {cert.year}
                  </p>
                  {cert.description && <p className="cert-card-description">{cert.description}</p>}

                  <div className="cert-card-footer">
                    {cert.link ? (
                      <a
                        className="cert-link-btn"
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer">
                        <GraduationCap size={15} /> Certified <ExternalLink size={13} />
                      </a>
                    ) : (
                      <span className="cert-link-btn is-static">
                        <GraduationCap size={15} /> Certified
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {totalPages > 1 && (
            <div className="cert-pagination">
              <button
                className="cert-page-arrow"
                onClick={() => goToPage(page - 1)}
                disabled={page === 1}
                aria-label="Previous page">
                <ChevronLeft size={16} />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  className={`cert-page-number ${page === p ? 'is-active' : ''}`}
                  onClick={() => goToPage(p)}>
                  {p}
                </button>
              ))}

              <button
                className="cert-page-arrow"
                onClick={() => goToPage(page + 1)}
                disabled={page === totalPages}
                aria-label="Next page">
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Certificates