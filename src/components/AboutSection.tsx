import { CheckCircle, Target, Users, Award, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import networkBg from '@/assets/network-bg.png';
import networkGlobe from '@/assets/network-globe.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export const AboutSection = () => {
  const { t } = useLanguage();
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const highlights = [
    {
      icon: Target,
      title: t('about.features.strategic_focus') || 'Strategic Focus',
      description: t('about.features.strategic_focus_desc') || 'Tailored B2B solutions that align with your business objectives'
    },
    {
      icon: Users,
      title: t('about.features.expert_team') || 'Expert Team',
      description: t('about.features.expert_team_desc') || 'Industry professionals with proven track records in corporate consulting'
    },
    {
      icon: Award,
      title: t('about.features.quality_results') || 'Quality Results',
      description: t('about.features.quality_results_desc') || 'Consistently delivering exceptional outcomes for our clients'
    },
    {
      icon: CheckCircle,
      title: t('about.features.proven_process') || 'Proven Process',
      description: t('about.features.proven_process_desc') || 'Systematic approach to optimization and growth implementation'
    }
  ];

  const stats = [
    { 
      value: '10+',
      label: t('about.stats.experience') || 'Years Experience'
    },
    { 
      value: '500+',
      label: t('about.stats.projects') || 'Projects Completed'
    },
    { 
      value: '98%',
      label: t('about.stats.satisfaction') || 'Client Satisfaction'
    }
  ];
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Splash Background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Main splash background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/80 backdrop-blur-sm" />
        
        {/* Network background splash */}
        <motion.div 
          className="absolute top-1/2 right-0 w-[1200px] h-[1200px] -translate-y-1/2 hidden md:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img 
            src={networkBg} 
            alt="Network background"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Animated globe splash */}
        <motion.div 
          className="absolute top-1/2 -right-40 w-[600px] h-[600px] -translate-y-1/2 mix-blend-screen hidden md:block"
          initial={{ opacity: 0, rotate: -30, scale: 0.8 }}
          animate={{ opacity: 0.8, rotate: 0, scale: 1 }}
          transition={{ 
            opacity: { duration: 1, delay: 0.3 },
            rotate: { 
              duration: 60, 
              repeat: Infinity, 
              ease: "linear",
              repeatType: "loop"
            },
            scale: { duration: 1, delay: 0.2 }
          }}
        >
          <img 
            src={networkGlobe} 
            alt="Network globe"
            className="w-full h-full object-contain md:hidden sm:idden"
          />
        </motion.div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        
        {/* Animated light effects */}
        <motion.div 
          className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl hidden md:block"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <motion.div 
        ref={ref}
        initial="hidden"
        animate={controls}
        className="container mx-auto max-w-7xl relative"
      >
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-8 relative z-10"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3
                }
              }
            }}
          >
            <div className="max-w-1xl">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">
                {t('about.section_title') || 'About La Formula Capital Group'}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                {t('about.section_description') || 'We are a specialized consulting firm dedicated to enhancing business efficiency and competitiveness through innovative B2B solutions. Our comprehensive approach combines strategic planning, process optimization, and cutting-edge technology to deliver measurable results.'}
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                {t('about.section_focus') || 'With a focus on corporate structure development, global business centralization, and strategic partnerships, we empower organizations to achieve their full potential in today\'s competitive marketplace.'}
              </p>
            </div>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.5
                  }
                }
              }}
            >
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl glass-card hover-glow group"
                    variants={fadeInUp}
                    whileHover={{ 
                      y: -5,
                      boxShadow: '0 10px 30px -10px rgba(99, 102, 241, 0.3)'
                    }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <motion.div 
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                      whileHover={{ rotate: 10 }}
                    >
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 sm:mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* <motion.button 
              className="btn-hero group"
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.4)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              {t('footer.get_started') || 'Get Started Today'}
              <motion.div 
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                initial={{ x: 0 }}
                animate={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight />
              </motion.div>
            </motion.button> */}
          </motion.div>
          
          {/* Visual Element */}
          {/* <motion.div 
            className="relative mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ 
              opacity: 1, 
              x: 0
            }}
            transition={{
              delay: 0.3,
              type: 'spring',
              stiffness: 100
            }}
          >
            <div className="relative z-10 glass-card p-6 md:p-8 rounded-3xl ml-0 md:ml-36 max-w-md md:max-w-none mx-auto">
              <div className="space-y-4 sm:space-y-6">
                {stats.map((stat, index) => (
                  <div key={index}>
                    {index > 0 && <div className="h-px bg-gradient-primary w-full my-3 sm:my-4" />}
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1 sm:mb-2">{stat.value}</div>
                      <div className="text-sm sm:text-base text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div> */}
        </div>
      </motion.div>
    </section>
  );
};