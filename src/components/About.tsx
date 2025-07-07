const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 section-animate">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
            I'm a passionate developer with experience in building modern web applications. 
            I specialize in frontend development using React and backend development with Node.js.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
            My journey in web development started 3 years ago, and since then, 
            I've worked on various projects ranging from small business websites to complex web applications.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="p-4 glass-card">
              <h3 className="font-bold text-gray-800 dark:text-white">Frontend</h3>
              <p className="text-gray-600 dark:text-gray-300">React, Next.js</p>
            </div>
            <div className="p-4 glass-card">
              <h3 className="font-bold text-gray-800 dark:text-white">Backend</h3>
              <p className="text-gray-600 dark:text-gray-300">Node.js, Express</p>
            </div>
            <div className="p-4 glass-card">
              <h3 className="font-bold text-gray-800 dark:text-white">Database</h3>
              <p className="text-gray-600 dark:text-gray-300">MongoDB, PostgreSQL</p>
            </div>
            <div className="p-4 glass-card">
              <h3 className="font-bold text-gray-800 dark:text-white">Tools</h3>
              <p className="text-gray-600 dark:text-gray-300">Git, Docker</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
