import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-cyan-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 section-animate">
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-extrabold gradient-text mb-4 drop-shadow-lg"
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-8"
        >
          Full Stack Developer | UI/UX Designer | Problem Solver
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-blue-600 btn-shadow text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
        >
          View My Work
        </motion.button>
      </div>
    </section>
  )
}

export default Hero
