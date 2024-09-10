import Certification from '@/components/certification'
import { cn } from '@/lib/utils'
import { createLazyFileRoute } from '@tanstack/react-router'
import Experience from '@/components/experience'
import Section from '@/components/section'
import Education from '@/components/education'

export const Route = createLazyFileRoute('/')({
  component: () => (
    <>
      <Section title="About Me">
        <p className={cn('mt-4 text-muted-foreground md:text-lg')}>
          I've been interested in and passionate about programming since I was a kid. I started tinkering on an old 486
          laptop with Borland C++ modifying examples to make fake installation applications. Once I got my Sony PSP in
          high school, I created and released homebrew applications. With that experience, I got a job out of high
          school with PosiMotion.
        </p>
        <p className={cn('mt-4 text-muted-foreground md:text-lg')}>
          Today, I still have a passion for programming with plenty of side projects outside of work, such as Outclimb,
          Prideful.li and my Nintendo Switch homebrew applications. I have also picked up a few more hobbies, such as
          rock climbing, hiking, and photography. In my free time, I also volunteer with Open Arms of Minnesota, helping
          to provide nourishing meals to critically ill individuals and their families.
        </p>
      </Section>

      <Section title="Experience">
        <div className={cn('mt-4 grid gap-4 lg:grid-cols-2')}>
          <Experience
            company="Nearpod / Renaissance Learning"
            duration="July 2023 - Present"
            title="Staff Frontend Engineer">
            <ul className={cn('list-disc pl-6')}>
              <li>Contributed to the Component Library to align with a brand new internal design system.</li>
              <li>
                Implemented Conventional Commit standards across Nearpod and automated versioning and change log
                generation with it.
              </li>
              <li>Developed a tool to easily query files across over 200 repositories for auditing purposes.</li>
              <li>Enhanced the local environment by reducing the amount RAM by over 16GB to run the full stack.</li>
            </ul>
          </Experience>
          <Experience
            company="Nearpod / Renaissance Learning"
            duration="February 2024 - Present"
            title="Inclusion Council Member">
            <p>TODO</p>
          </Experience>
          <Experience
            company="Pendo.io"
            duration="January 2020 - June 2023"
            title="Staff Front End Engineer, Tech Lead">
            <ul className={cn('list-disc pl-6')}>
              <li>
                Contributed to developing Core Events and Product Engagement Score, including building a custom radar
                chart for PES in a short turnaround window.
              </li>
              <li>
                Led a team to deliver the Workflows feature for Pendo's Adopt product, providing valuable insight into
                business processes
              </li>
              <li>
                Temporarily served as Tech Lead for the Data Explorer team, improving processes and delivering general
                improvements and added functionality
              </li>
              <li>
                Contributed to the Integrations team by providing final touches on Data Sync, fixing long-standing bugs,
                and upgrading dependencies for the Resource Center integration repository.
              </li>
            </ul>
          </Experience>
          <Experience company="Pendo.io" duration="February 2021 - April 2022" title="GSRM Affinity Group Co-Chair">
            <ul className={cn('list-disc pl-6')}>
              <li>Involved in planning monthly meetings and educating colleagues on important GSRM issues.</li>
              <li>
                Contributed to raising awareness about significant events such as Transgender Awareness Week and
                Aromantic Spectrum Awareness Week.
              </li>
              <li>
                Advocated for changes in the organization for the GSRM group as part of Pendo's Diversity Advisory
                Board.
              </li>
            </ul>
          </Experience>
          <Experience company="Cision" duration="September 2016 - June 2020" title="Software Engineer">
            <p>
              When I joined, I started working in the frontend of the Analytics area for our main product, Cision
              Communication Cloud. While at Cision, I moved into more of a full-stack role working on both the
              Angular.js frontend and C# backend. At Cision, I helped on the Analytics Dashboard, Social Analytics
              Tracking, and the Earned/Placed Impact areas of Cision Communication Cloud. Near the end of my time at
              Cision, we acquired TrendKite, where I worked on their ReactJS frontend, specifically in the Email
              Marketing area.
            </p>
          </Experience>
          <Experience company="Mindtree" duration="January 2014 - September 2016" title="Software Engineer">
            <p>
              Was lead programmer on most mobile projects at Mindtree's Gainesville Delivery Center. Some of my
              day-to-day responsibilities included:
            </p>
            <ul className={cn('list-disc pl-6')}>
              <li>Estimations for statements of work.</li>
              <li>Creating build processes for the team.</li>
              <li>Setting up continuous integration using Git and Jenkins.</li>
              <li>Meeting with clients to help the business analysis flush out user stories.</li>
              <li>Setting up basic frameworks and design database structures.</li>
              <li>Managing code quality.</li>
              <li>Conducting technical interviews.</li>
              <li>raining/teaching junior programmers. (iOS, Android, HTML, CSS, JS, TDD)</li>
              <li>Helping clients adapt to agile methodology.</li>
            </ul>
          </Experience>
          <Experience company="Zgraph" duration="November 2011 - January 2014" title="Lead Internet Engineer">
            <p>
              I was the Lead Internet Engineer at Zgraph, Inc, and was the lead programmer on many of the large projects
              that came into Zgraph. I was also in charge of making sure the eight servers owned by Zgraph at the time
              stayed up and healthy.
            </p>
          </Experience>
          <Experience company="PosiMotion" duration="June 2008 - November 2011" title="Lead Programmer">
            <p>
              I was the lead programmer at PosiMotion, LLC. In this position I was in charge of any main projects that
              came in or out of the company. I also acted as a mentor for the other programmers that were not as
              experienced. Additionally I interfaced with the technical teams from other companies or individuals that
              were interested in publishing and/or working with us.
            </p>
          </Experience>
        </div>
      </Section>

      <Section title="Education">
        <div className={cn('mt-4 grid gap-4 lg:grid-cols-2')}>
          <Education
            title="AS, Computer Programming and Analysis"
            organization="Daytona State College"
            completed="2013"
          />
          <Education title="Certificate, Computer Programming" organization="Daytona State College" completed="2013" />
        </div>
      </Section>

      <Section title="Certifications">
        <div className={cn('mt-4 grid gap-4 lg:grid-cols-2')}>
          <Certification issued="July 2020" title="Pendo Essentials">
            <p>
              This certifies that I can install Pendo, tag features, and pages, create and use segments, implement
              guides and layouts, and interpret behavioral analytics.
            </p>
          </Certification>
          <Certification issued="July 2015" title="Orchestra Commerce Platform Technical Training"></Certification>
          <Certification
            issued="October 2015"
            expired="October 2016"
            title="Scaled Agile Framework® Practitioner (SP)"></Certification>
        </div>
      </Section>
    </>
  ),
})
