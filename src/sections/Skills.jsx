// import { useMemo, useState } from 'react'
// import { motion } from 'framer-motion'
// import './skills.css'

// /* ------------------------------------------------------------------
//    APNI SKILLS YAHAN LIKHO
//    label = 2 akshar ka short naam, name = skill ka naam,
//    logo  = simpleicons.org ka slug (nahi hai to null likho)
// ------------------------------------------------------------------- */
// const CATEGORIES = [
//   {
//     key: 'webDev',
//     label: 'web development',
//     items: [
//       { label: 'Mo', name: 'mongodb', logo: 'mongodb' },
//       { label: 'Ex', name: 'express', logo: 'express' },
//       { label: 'Re', name: 'react', logo: 'react' },
//       { label: 'No', name: 'node.js', logo: 'nodedotjs' },
//       { label: 'Pg', name: 'postgresql', logo: 'postgresql' },
//       { label: 'My', name: 'mysql', logo: 'mysql' },
//       { label: 'Nx', name: 'next.js', logo: 'nextdotjs' },
//       { label: 'Ts', name: 'typescript', logo: 'typescript' },
//       { label: 'Rd', name: 'redis', logo: 'redis' },
//     ],
//   },
//   {
//     key: 'softwareDev',
//     label: 'software development',
//     items: [
//       { label: 'Lx', name: 'linux', logo: 'linux' },
//       { label: 'Py', name: 'python', logo: 'python' },
//       { label: 'C+', name: 'c++', logo: 'cplusplus' },
//       { label: 'Gt', name: 'git', logo: 'git' },
//       { label: 'Gh', name: 'github', logo: 'github' },
//       { label: 'Vc', name: 'version control', logo: null },
//     ],
//   },
//   {
//     key: 'aiMl',
//     label: 'ai & ml',
//     items: [
//       { label: 'Py', name: 'python', logo: 'python' },
//       { label: 'Pd', name: 'pandas', logo: 'pandas' },
//       { label: 'Np', name: 'numpy', logo: 'numpy' },
//       { label: 'Mp', name: 'matplotlib', logo: 'matplotlib' },
//       { label: 'Sk', name: 'scikit-learn', logo: 'scikitlearn' },
//       { label: 'Oc', name: 'opencv', logo: 'opencv' },
//     ],
//   },
//   {
//     key: 'design',
//     label: 'digital design',
//     items: [
//       { label: 'Fg', name: 'figma', logo: 'figma' },
//       { label: 'Cv', name: 'canva', logo: 'canva' },
//       { label: 'Fr', name: 'framer', logo: 'framer' },
//     ],
//   },
// ]

// // Har category mein aap khud ko kitna confident maante ho (0 se 100).
// // Ye numbers apni sachchi level ke hisaab se badlo.
// const CATEGORY_LEVELS = {
//   webDev: 90,
//   softwareDev: 80,
//   aiMl: 65,
//   design: 88,
// }

// const gridVariants = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.03 } },
// }

// const keyVariants = {
//   hidden: { opacity: 0, scale: 0.6, y: 12 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     y: 0,
//     transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
//   },
// }

// const CircularProgress = ({ value, size = 130, strokeWidth = 10 }) => {
//   const radius = (size - strokeWidth) / 2
//   const circumference = 2 * Math.PI * radius
//   const offset = circumference - (value / 100) * circumference

//   return (
//     <div className="circular-progress" style={{ width: size, height: size }}>
//       <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
//         <circle
//           cx={size / 2}
//           cy={size / 2}
//           r={radius}
//           fill="none"
//           strokeWidth={strokeWidth}
//           style={{ stroke: 'var(--surface-chip)' }}
//         />
//         <motion.circle
//           cx={size / 2}
//           cy={size / 2}
//           r={radius}
//           fill="none"
//           strokeWidth={strokeWidth}
//           strokeLinecap="round"
//           strokeDasharray={circumference}
//           initial={{ strokeDashoffset: circumference }}
//           whileInView={{ strokeDashoffset: offset }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
//           style={{
//             stroke: 'var(--accent)',
//             transform: 'rotate(-90deg)',
//             transformOrigin: '50% 50%',
//           }}
//         />
//       </svg>
//       <div className="circular-progress-center">
//         <span className="circular-progress-value">{value}%</span>
//       </div>
//     </div>
//   )
// }

// const Skills = () => {
//   const [activeFilter, setActiveFilter] = useState('all')

//   // Har skill ko 1, 2, 3... number deta hai (keycap ke kone mein dikhta hai)
//   const numberedCategories = useMemo(() => {
//     let n = 0
//     return CATEGORIES.map((cat) => ({
//       ...cat,
//       items: cat.items.map((tool) => ({ ...tool, index: ++n })),
//     }))
//   }, [])

//   return (
//     <section className="toolstack-section" id="skills">
//       <div className="max-w-7xl mx-auto c-space">
//         <h3 className="head-text mb-3">Skills</h3>

//         <div className="toolstack-layout">
//           {/* LEFT: keycap grid + filters */}
//           <div className="toolstack-left">
//             <p className="toolstack-subtitle">
//               The tools behind my projects, grouped by what they are used for.
//             </p>

//             <motion.div
//               className="toolstack-clusters"
//               variants={gridVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.2 }}>
//               {numberedCategories.map((cat) => {
//                 const isDimmed = activeFilter !== 'all' && activeFilter !== cat.key
//                 const isHighlighted = activeFilter === cat.key

//                 return (
//                   <div
//                     key={cat.key}
//                     className={`toolstack-cluster ${isDimmed ? 'is-dimmed' : ''} ${
//                       isHighlighted ? 'is-highlighted' : ''
//                     }`}>
//                     {cat.items.map((tool) => (
//                       <motion.div
//                         key={`${cat.key}-${tool.name}`}
//                         className="toolstack-key"
//                         variants={keyVariants}>
//                         <span className="toolstack-key-index">{tool.index}</span>
//                         <span
//                           className="toolstack-key-label"
//                           style={{ color: `var(--element-${((tool.index - 1) % 10) + 1})` }}>
//                           {tool.label}
//                         </span>
//                         <span className="toolstack-key-name">{tool.name}</span>

//                         {tool.logo && (
//                           <div className="toolstack-key-overlay">
//                             <img
//                               src={`https://cdn.simpleicons.org/${tool.logo}/ffffff`}
//                               alt={`${tool.name} logo`}
//                               onError={(e) => {
//                                 e.currentTarget.style.display = 'none'
//                               }}
//                             />
//                           </div>
//                         )}
//                       </motion.div>
//                     ))}
//                   </div>
//                 )
//               })}
//             </motion.div>

//             <div className="toolstack-filters">
//               {['all', ...CATEGORIES.map((c) => c.key)].map((key) => {
//                 const label =
//                   key === 'all' ? 'all tools' : CATEGORIES.find((c) => c.key === key).label
//                 return (
//                   <button
//                     key={key}
//                     className={`toolstack-filter-btn ${activeFilter === key ? 'is-active' : ''}`}
//                     onClick={() => setActiveFilter(key)}>
//                     <span className="toolstack-filter-dot" />
//                     {label}
//                   </button>
//                 )
//               })}
//             </div>
//           </div>

//           {/* RIGHT: category-wise proficiency rings */}
//           <div className="toolstack-right">
//             {CATEGORIES.map((cat) => (
//               <div className="circular-progress-cell" key={cat.key}>
//                 <CircularProgress value={CATEGORY_LEVELS[cat.key]} />
//                 <span className="circular-progress-label">{cat.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Skills

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import './skills.css'

/* ------------------------------------------------------------------
   APNI SKILLS YAHAN LIKHO
   label = 2 akshar ka short naam, name = skill ka naam,
   logo  = simpleicons.org ka slug (nahi hai to null likho)
------------------------------------------------------------------- */
const CATEGORIES = [
  {
    key: 'webDev',
    label: 'web development',
    items: [
      { label: 'Mo', name: 'mongodb', logo: 'mongodb' },
      { label: 'Ex', name: 'express', logo: 'express' },
      { label: 'Re', name: 'react', logo: 'react' },
      { label: 'No', name: 'node.js', logo: 'nodedotjs' },
      { label: 'Pg', name: 'postgresql', logo: 'postgresql' },
      { label: 'My', name: 'mysql', logo: 'mysql' },
      { label: 'Nx', name: 'next.js', logo: 'nextdotjs' },
      { label: 'Ts', name: 'typescript', logo: 'typescript' },
      { label: 'Rd', name: 'redis', logo: 'redis' },
    ],
  },
  {
    key: 'softwareDev',
    label: 'software development',
    items: [
      { label: 'Lx', name: 'linux', logo: 'linux' },
      { label: 'Py', name: 'python', logo: 'python' },
      { label: 'C+', name: 'c++', logo: 'cplusplus' },
      { label: 'Gt', name: 'git', logo: 'git' },
      { label: 'Gh', name: 'github', logo: 'github' },
      { label: 'Vc', name: 'version control', logo: null },
    ],
  },
  {
    key: 'aiMl',
    label: 'ai & ml',
    items: [
      { label: 'Py', name: 'python', logo: 'python' },
      { label: 'Pd', name: 'pandas', logo: 'pandas' },
      { label: 'Np', name: 'numpy', logo: 'numpy' },
      { label: 'Mp', name: 'matplotlib', logo: 'matplotlib' },
      { label: 'Sk', name: 'scikit-learn', logo: 'scikitlearn' },
      { label: 'Oc', name: 'opencv', logo: 'opencv' },
    ],
  },
  {
    key: 'design',
    label: 'digital design',
    items: [
      { label: 'Fg', name: 'figma', logo: 'figma' },
      { label: 'Cv', name: 'canva', logo: 'canva' },
      { label: 'Fr', name: 'framer', logo: 'framer' },
    ],
  },
]

// Har category mein aap khud ko kitna confident maante ho (0 se 100).
// Ye numbers apni sachchi level ke hisaab se badlo.
const CATEGORY_LEVELS = {
  webDev: 90,
  softwareDev: 80,
  aiMl: 65,
  design: 88,
}

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03 } },
}

const keyVariants = {
  hidden: { opacity: 0, scale: 0.6, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
}

const CircularProgress = ({ value, size = 130, strokeWidth = 10 }) => {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference

  return (
    <div className="circular-progress" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          style={{ stroke: 'var(--surface-chip)' }}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            stroke: 'var(--accent)',
            transform: 'rotate(-90deg)',
            transformOrigin: '50% 50%',
          }}
        />
      </svg>
      <div className="circular-progress-center">
        <span className="circular-progress-value">{value}%</span>
      </div>
    </div>
  )
}

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  // Har skill ko 1, 2, 3... number deta hai (keycap ke kone mein dikhta hai)
  const numberedCategories = useMemo(() => {
    let n = 0
    return CATEGORIES.map((cat) => ({
      ...cat,
      items: cat.items.map((tool) => ({ ...tool, index: ++n })),
    }))
  }, [])

  return (
    <section className="toolstack-section" id="skills">
      <div className="max-w-7xl mx-auto c-space">
        <h3 className="head-text mb-3">Skills</h3>

        <div className="toolstack-layout">
          {/* LEFT: filters + keycap grid */}
          <div className="toolstack-left">
            <p className="toolstack-subtitle">
              The tools behind my projects, grouped by what they are used for.
            </p>

            {/* FILTER BAR (ab tiles ke upar hai, hamesha dikhega) */}
            <div className="toolstack-filters">
              {['all', ...CATEGORIES.map((c) => c.key)].map((key) => {
                const label =
                  key === 'all' ? 'all tools' : CATEGORIES.find((c) => c.key === key).label
                return (
                  <button
                    key={key}
                    className={`toolstack-filter-btn ${activeFilter === key ? 'is-active' : ''}`}
                    onClick={() => setActiveFilter(key)}>
                    <span className="toolstack-filter-dot" />
                    {label}
                  </button>
                )
              })}
            </div>

            <motion.div
              className="toolstack-clusters"
              variants={gridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}>
              {numberedCategories.map((cat) => {
                const isDimmed = activeFilter !== 'all' && activeFilter !== cat.key
                const isHighlighted = activeFilter === cat.key

                return (
                  <div
                    key={cat.key}
                    className={`toolstack-cluster ${isDimmed ? 'is-dimmed' : ''} ${
                      isHighlighted ? 'is-highlighted' : ''
                    }`}>
                    {cat.items.map((tool) => (
                      <motion.div
                        key={`${cat.key}-${tool.name}`}
                        className="toolstack-key"
                        variants={keyVariants}>
                        <span className="toolstack-key-index">{tool.index}</span>
                        <span
                          className="toolstack-key-label"
                          style={{ color: `var(--element-${((tool.index - 1) % 10) + 1})` }}>
                          {tool.label}
                        </span>
                        <span className="toolstack-key-name">{tool.name}</span>

                        {tool.logo && (
                          <div className="toolstack-key-overlay">
                            <img
                              src={`https://cdn.simpleicons.org/${tool.logo}/ffffff`}
                              alt={`${tool.name} logo`}
                              onError={(e) => {
                                e.currentTarget.style.display = 'none'
                              }}
                            />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                )
              })}
            </motion.div>
          </div>

          {/* RIGHT: category-wise proficiency rings */}
          <div className="toolstack-right">
            {CATEGORIES.map((cat) => (
              <div className="circular-progress-cell" key={cat.key}>
                <CircularProgress value={CATEGORY_LEVELS[cat.key]} />
                <span className="circular-progress-label">{cat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills