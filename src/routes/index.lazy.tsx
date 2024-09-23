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
        <div className={cn('mt-4 grid items-start gap-4 lg:grid-cols-2')}>
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
            <ul className={cn('list-disc pl-6')}>
              <li>Engage in monthly meetings to discuss subcommittee progress.</li>
              <li>
                Contribute to the education and development subcommittee by helping to source educational material from
                LinkedIn Learning.
              </li>
              <li>Collaborate on the creation of a virtual privilege walk for leaders.</li>
            </ul>
          </Experience>
          <Experience
            company="Pendo.io"
            duration="January 2020 - June 2023"
            title="Staff Frontend Engineer, Tech Lead">
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
            <ul className={cn('list-disc pl-6')}>
              <li>
                Contributed as a full stack engineer working in C# and Angular.js to the Analytics Dashboard, Social
                Analytics Tracking, and Earned/Placed Impact areas of Cision Communication Cloud.
              </li>
              <li>Assisted as a frontend engineer working in React to the Email Marketing are of Trendkite.</li>
            </ul>
          </Experience>
          <Experience company="Mindtree" duration="January 2014 - September 2016" title="Technical Project Lead">
            <ul className={cn('list-disc pl-6')}>
              <li>
                Led mobile projects, such as Volvo Scout Master and Mack CV360 iPad apps, for their Delivery Center in
                Gainesville, FL.
              </li>
              <li>
                Responsible for estimations, creating build processes, meeting with clients, managing code quality,
                conducting technical interviews, and training junior engineers.
              </li>
              <li>Helped clients adapt to agile methodology</li>
            </ul>
          </Experience>
          <Experience company="Zgraph" duration="November 2011 - January 2014" title="Lead Internet Engineer">
            <ul className={cn('list-disc pl-6')}>
              <li>
                Lead engineer overseeing projects such as Monterey Boats iPad app and National Marker Company Ecommerce
                website.
              </li>
              <li>Responsible to maintaining and upkeep of the servers hosting all of the clients websites.</li>
            </ul>
          </Experience>
          <Experience company="PosiMotion" duration="June 2008 - November 2011" title="Lead Programmer">
            <ul className={cn('list-disc pl-6')}>
              <li>
                Lead engineer overseeing projects such as National Geographic's Jigsaw and Spot It games, and the 2009
                Toys R Us Big Book app.
              </li>
              <li>Designed and led the project for G-Park, featured in an Apple iPhone 3G commercial.</li>
              <li>
                Acted as a mentor to other engineers, providing support and guidance, and collaborated with individuals
                and companies for application publishing.
              </li>
            </ul>
          </Experience>
        </div>
      </Section>

      <Section title="Education">
        <div className={cn('mt-4 grid items-start gap-4 lg:grid-cols-2')}>
          <Education
            title="AS, Computer Programming and Analysis"
            organization="Daytona State College"
            completed="2013"
          />
          <Education title="Certificate, Computer Programming" organization="Daytona State College" completed="2013" />
        </div>
      </Section>

      <Section title="Certifications">
        <div className={cn('mt-4 grid items-start gap-4 lg:grid-cols-2')}>
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
