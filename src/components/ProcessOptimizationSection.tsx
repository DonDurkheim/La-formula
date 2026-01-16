import { useLanguage } from '@/contexts/LanguageContext';

export const ProcessOptimizationSection = () => {
  const { t } = useLanguage();

  // Section content with translations
  const content = {
    title: t('services.optimizing_processes') || 'Optimizing Processes',
    description: t('services.optimizing_description') || 'We achieve outstanding results by enhancing processes and efficiently managing costs.',
    features: [
      {
        title: t('about.features.strategic_focus') || 'Strategic Focus',
        desc: t('about.features.strategic_focus_desc') || 'Tailored B2B solutions that align with your business objectives'
      },
      {
        title: t('about.features.expert_team') || 'Expert Team',
        desc: t('about.features.expert_team_desc') || 'Industry professionals with proven track records in corporate consulting'
      },
      {
        title: t('about.features.quality_results') || 'Quality Results',
        desc: t('about.features.quality_results_desc') || 'Consistently delivering exceptional outcomes for our clients'
      }
    ]
  };

  const altText = t('about.title') || 'La Formula Capital Group';

  return (
    <section id="process" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {content.title}
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {content.description}
              </p>
            </div>

            <div className="space-y-6">
              {content.features.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end items-stretch">
            <img
              src="@/assets/Mobile%20Formula.png"
              alt={altText}
              className="h-full w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
