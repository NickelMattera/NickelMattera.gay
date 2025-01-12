import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Certification from '@/components/certification'
import { cn } from '@/lib/utils'
import { createLazyFileRoute } from '@tanstack/react-router'
import Section from '@/components/section'
import StackedBarChart from '@/components/stacked-bar-chart'
import Education from '@/components/education'
import Experience from '@/components/experience'

export const Route = createLazyFileRoute('/climbing')({
  component: () => {
    const climbingExperienceConfig = {
      topRope: { color: 'hsl(var(--chart-1))', label: 'Top Rope' },
      soloTopRope: { color: 'hsl(var(--chart-2))', label: 'Solo Top Rope' },
      sportLead: { color: 'hsl(var(--chart-3))', label: 'Sport Lead' },
      follow: { color: 'hsl(var(--chart-4))', label: 'Follow' },
      tradLead: { color: 'hsl(var(--chart-5))', label: 'Trad Lead' },
    }

    const pitchesPerYear = [
      {
        year: 2022,
        topRope: 2,
        soloTopRope: 0,
        sportLead: 0,
        tradLead: 0,
        follow: 0,
      },
      {
        year: 2023,
        topRope: 7,
        soloTopRope: 0,
        sportLead: 7,
        tradLead: 2,
        follow: 2,
      },
      {
        year: 2024,
        topRope: 16,
        soloTopRope: 7,
        sportLead: 6,
        tradLead: 13,
        follow: 11,
      },
    ]

    const rockRoutesByGrade = [
      {
        grade: '5.3',
        topRope: 1,
        soloTopRope: 2,
        sportLead: 4,
        tradLead: 0,
        follow: 0,
      },
      {
        grade: '5.4',
        topRope: 1,
        soloTopRope: 2,
        sportLead: 1,
        tradLead: 5,
        follow: 2,
      },
      {
        grade: '5.5',
        topRope: 2,
        soloTopRope: 0,
        sportLead: 0,
        tradLead: 3,
        follow: 1,
      },
      {
        grade: '5.6',
        topRope: 4,
        soloTopRope: 2,
        sportLead: 2,
        tradLead: 5,
        follow: 3,
      },
      {
        grade: '5.7',
        topRope: 6,
        soloTopRope: 0,
        sportLead: 3,
        tradLead: 0,
        follow: 4,
      },
      {
        grade: '5.8',
        topRope: 3,
        soloTopRope: 0,
        sportLead: 2,
        tradLead: 1,
        follow: 1,
      },
      {
        grade: '5.9',
        topRope: 2,
        soloTopRope: 1,
        sportLead: 1,
        tradLead: 0,
        follow: 0,
      },
      {
        grade: '5.10',
        topRope: 3,
        soloTopRope: 0,
        sportLead: 0,
        tradLead: 0,
        follow: 0,
      },
    ]

    return (
      <>
        <Section title="About Me">
          <p className="mt-4 text-muted-foreground md:text-lg">
            I started climbing in March of 2022 after a good friend told me about it. I then moved up to Minnesota a few
            months later and, shortly after that, found out about OutClimb. Since joining OutClimb, I have expanded my
            climbing knowledge and experience from just climbing strictly indoors to climbing outdoors, setting up top
            rope anchors, sport and trad lead climbing, and much more.
          </p>
        </Section>

        <Section title="Experience">
          <div className={cn('mt-4 grid items-start gap-4 lg:grid-cols-2')}>
            <Experience company="OutClimb" duration="January 2025 - Present" title="Vice President & Treasurer">
              <p>
                We are a Minnesota-based organization dedicated to making climbing accessible to as many trans and queer
                people as possible. We also foster a supportive community and promote diversity, equity, and inclusion
                within the outdoor recreation communities.
              </p>
            </Experience>
            <Experience company="Midwest Mountain Guides" duration="January 2025" title="Community Leader Guide">
              <p>
                I was an instructor for the Women, Trans, Femme beginner ice climbing clinic at the Sandstone Ice
                Festival. The clinic was an introduction to ice climbing that created space for women, trans and femme
                climbers.
              </p>
            </Experience>
          </div>
          <div className={cn('mt-4 flex w-full gap-4')}>
            <Card className={cn('flex-auto')}>
              <CardHeader>
                <CardTitle className={cn('text-center')}>Total Number of Routes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className={cn('text-center text-4xl font-bold text-foreground')}>70</p>
              </CardContent>
            </Card>
            <Card className={cn('flex-auto')}>
              <CardHeader>
                <CardTitle className={cn('text-center')}>Total Number of Pitches</CardTitle>
              </CardHeader>
              <CardContent>
                <p className={cn('text-center text-4xl font-bold text-foreground')}>74</p>
              </CardContent>
            </Card>
          </div>

          <Card className={cn('mt-4')}>
            <CardHeader>
              <CardTitle className={cn('text-center')}>Pitches per Year</CardTitle>
            </CardHeader>
            <CardContent>
              <StackedBarChart
                config={climbingExperienceConfig}
                data={pitchesPerYear}
                xDataKey="year"
                className={cn('max-h-80', 'w-full')}
              />
            </CardContent>
          </Card>

          <Card className={cn('mt-4')}>
            <CardHeader>
              <CardTitle className={cn('text-center')}>Rock Routes by Grade</CardTitle>
            </CardHeader>
            <CardContent>
              <StackedBarChart
                config={climbingExperienceConfig}
                data={rockRoutesByGrade}
                xDataKey="grade"
                className={cn('max-h-80', 'w-full')}
              />
            </CardContent>
          </Card>
        </Section>

        <Section title="Education">
          <div className={cn('mt-4 grid gap-4 lg:grid-cols-2')}>
            <Education completed="June 2024" organization="AMGA" title="Single Pitch Instructor Course">
              <p>During the course we covered topics such as...</p>
              <ul className={cn('list-disc pl-6')}>
                <li>Risk management techniques</li>
                <li>Anchor building, belay techniques, and rescue/assistant for both bottom and top managed sites</li>
                <li>Instructional techniques for teaching climbing movement</li>
              </ul>
            </Education>
          </div>
        </Section>

        <Section title="Certifications">
          <div className={cn('mt-4 grid gap-4 lg:grid-cols-2')}>
            <Certification issued="February 2024" expires="February 2026" title="NOLS Wilderness First Aid">
              <p>
                This certifies that I learned how to use the Patient Assessment System, how to provide effective first
                aid treatments for injuries and illnesses common in the outdoors, and how to make appropriate evacuation
                decisions.
              </p>
            </Certification>
            <Certification issued="February 2024" expires="February 2026" title="NOLS Epinephrine Auto-Injector">
              <p>
                This certifies that I learned how to recognizing anaphylaxis, administer epinephrine using an
                auto-injector, understand indications and contraindications for epinephrine use, and proper
                documentation and reporting procedures.
              </p>
            </Certification>
          </div>
        </Section>
      </>
    )
  },
})
