import Certification from '@/components/certification'
import { cn } from '@/lib/utils'
import { createLazyFileRoute } from '@tanstack/react-router'
import Experience from '@/components/experience'
import Section from '@/components/section'

export const Route = createLazyFileRoute('/')({
  component: () => (
    <>
      <Section title="About Me">
        <p className="mt-4 text-muted-foreground md:text-lg">
          I've been interested in and passionate about programming since I was a kid. I started tinkering on an old 486
          laptop with Borland C++ modifying examples to make fake installation applications. Once I got my Sony PSP in
          high school, I created and released homebrew applications. With that experience, I got a job out of high
          school with PosiMotion.
        </p>
        <p className="mt-4 text-muted-foreground md:text-lg">
          Today, I still have a passion for programming with plenty of side projects outside of work, such as Outclimb,
          Prideful.li and my Nintendo Switch homebrew applications. I have also picked up a few more hobbies, such as
          rock climbing, hiking, and photography. In my free time, I also volunteer with Open Arms of Minnesota, helping
          to provide nourishing meals to critically ill individuals and their families.
        </p>
      </Section>

      <Section title="Experience">
        <ol className="mt-4 space-y-4">
          <li>
            <Experience
              company="Nearpod / Renaissance Learning"
              duration="July 2023 - Present"
              title="Staff Frontend Engineer">
              <p>
                I joined the Core Platform team to help build a solid foundation and support their feature teams. I have
                worked on and led the effort to update Nearpod's Component Library to match their internal design
                system. I also created a tool to query across their vast number of repositories to audit where things
                are being used. I've also worked on documenting processes and building an agreement with the team on how
                we work.
              </p>
            </Experience>
          </li>
          <li>
            <Experience
              company="Nearpod / Renaissance Learning"
              duration="February 2024 - Present"
              title="Inclusion Council Member">
              <p>TODO</p>
            </Experience>
          </li>
          <li>
            <Experience
              company="Pendo.io"
              duration="January 2020 - June 2023"
              title="Staff Front End Engineer, Tech Lead">
              <p>
                I came in at the tail end of a project to allow customers to subscribe to account and visitor reports
                and receive weekly email updates. Even then, I helped with the final finishing touches on the email
                templates to prepare them for release. After that project, we continued working on Core Events, Core
                Event Dashboard widgets, Core Event Dropdowns, Product Engagement Score, and Product Engagement Score
                drill-downs. I then moved on to another team working on our Adopt product, specifically Adopt Studio,
                getting that project off the ground and primarily working around the WYSIWYG.
              </p>
              <p>
                I was allowed to lead a brand new team for Pendo's Adopt product. This team was focused on the Workflows
                feature, which would allow our Adopt users to gather valuable insight into their business processes.
                This highly efficient team delivered everything we set out to do in a quarter in time for the release of
                the Adopt product at the annual Company Kick-Off event. We then consistently produced new features and
                developed highly efficient processes to run our team flat and lean. Some of those features include
                Workflows, recurring Workflows, completion over time charts for recurring and non-recurring Workflows,
                and segmentation by Workflows.
              </p>
              <p>
                I continued to lead the team responsible for Workflows in Pendo's Adopt product. In my time as Tech Lead
                for this team, we delivered multiple features on time, such as Workflows for Recurring Processes, the
                ability to Segment by Workflow, and the ability to Visualize Progress Over Time. I then proceeded to be
                the temporary Tech Lead for the team responsible for Data Explorer in Pendo's Engage product while their
                Tech Lead was out on paternity leave. While being Tech Lead on that team, I helped improve the team's
                and squad's process by implementing a fixed template and strategy of documenting our Epics into
                Confluence. In addition, I worked on reducing the number of meetings between team leadership to allow
                the Tech Lead to work more with the team. During my time as Tech Lead for this team, we delivered
                General Improvements to Data Explorer, the ability to search and view Metadata Values in the Segment
                Builder, and added functionality to filter by Event Properties in Data Explorer.
              </p>
              <p>
                I continued for a few months on the team responsible for Data Explorer once the Tech Lead returned from
                paternity leave. For the transition, I documented all the process changes and everything the team and
                squad had accomplished while they were out to help get them back up to speed faster. I then transitioned
                to the team responsible for Integrations, the public API, and Webhooks, where I helped with the final
                touches on Data Sync. In addition, I supported their customers by fixing some long-standing bugs in a
                few of our key integrations. I also began upgrading the dependencies of their Resource Center
                integration repository.
              </p>
            </Experience>
          </li>
          <li>
            <Experience company="Pendo.io" duration="February 2021 - April 2022" title="GSRM Affinity Group Co-Chair">
              <p>
                As the co-chair of the GSRM affinity group at Pendo, I helped plan monthly meetings and events with our
                community. I also aided in educating Pendozers both in and outside of the group on important GSRM
                issues, such as daily slack posts for Transgender Awareness Week, Aromantic Spectrum Awareness Week, and
                much more. Being a co-chair also made me part of Pendo's Diversity Advisory Board, where I would
                advocate for changes for the GSRM group.
              </p>
            </Experience>
          </li>
          <li>
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
          </li>
          <li>
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
          </li>
          <li>
            <Experience company="Zgraph" duration="November 2011 - January 2014" title="Lead Internet Engineer">
              <p>
                I was the Lead Internet Engineer at Zgraph, Inc, and was the lead programmer on many of the large
                projects that came into Zgraph. I was also in charge of making sure the eight servers owned by Zgraph at
                the time stayed up and healthy.
              </p>
            </Experience>
          </li>
          <li>
            <Experience company="PosiMotion" duration="June 2008 - November 2011" title="Lead Programmer">
              <p>
                I was the lead programmer at PosiMotion, LLC. In this position I was in charge of any main projects that
                came in or out of the company. I also acted as a mentor for the other programmers that were not as
                experienced. Additionally I interfaced with the technical teams from other companies or individuals that
                were interested in publishing and/or working with us.
              </p>
            </Experience>
          </li>
        </ol>
      </Section>

      <Section title="Education">
        <div className="mt-4 space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Bachelor of Science in Computer Science</h3>
            <p className="text-muted-foreground">University of Somewhere | 2014 - 2018</p>
            <ul className="mt-2 space-y-2 text-muted-foreground">
              <li>Graduated with a 3.8 GPA and Dean's List recognition.</li>
              <li>Participated in various hackathons and coding competitions.</li>
              <li>Served as a teaching assistant for an introductory programming course.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Certifications">
        <div className="mt-4 space-y-4">
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
