import Container from "@/components/Container";

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ]
  }
  ```
*/
const RAxWork = () => {
  return (
    <Container>
      <img
        src="/rax-cover-2.jpg"
        className="pt-20"
        alt=""
        role="presentation"
        aria-hidden
      />

      <div className="overflow-hidden relative py-16">
        <div className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-lg">
            <h1>
              <span className="block text-base font-semibold tracking-wide text-indigo-600 uppercase dark:text-yellow-300">
                RAx Labs Inc.
              </span>
            </h1>
            <h2>
              <span className="block mt-2 text-3xl font-bold tracking-tight leading-8 text-gray-900 dark:text-white sm:text-4xl">
                The Product
              </span>
            </h2>
            <p className="mt-8 text-xl leading-8 text-gray-800 dark:text-gray-200">
              RAx is a web app that assists research scholars to speed up their
              information discovery, improve understanding of scholarly articles
              and organize knowledge to be more productive.
            </p>
            <p className="mt-8 text-xl leading-8 text-gray-800 dark:text-gray-200">
              It is one of its kind tool in the research productivity landscape,
              integrating insights of researcher behavior and a deep
              understanding of how qualitative research is produced with
              need-driven Artificial Intelligence and innovative design.
            </p>
            <figure>
              <img
                className="mt-8 w-full rounded-lg"
                src="/rax-cover.jpg"
                alt=""
                width={1200}
                height={1000}
              />
            </figure>
          </div>
          <div className="prose prose-lg mx-auto mt-6 max-w-4xl text-gray-800 dark:text-gray-200 dark:prose-light prose-indigo">
            <h2>
              <span className="block mt-2 text-3xl font-bold tracking-tight leading-8 text-gray-900 dark:text-white sm:text-4xl">
                Responsibilities
              </span>
            </h2>
            <p>
              In this Product, I had to wear multiple hats and justify
              responsibilities of each role. Here is the summary of what I did
              in each role.
            </p>
            <h3>
              <span className="block mt-2 text-2xl font-bold tracking-tight leading-8 text-gray-900 dark:text-white sm:text-3xl">
                Product Architect
              </span>
            </h3>
            <ul>
              <li>
                I have been a part of every major architecture decision in the
                entire organization (Platform team, Web dev team & AI Team).
              </li>
              <li>
                I have redesigned the systems' architecture to achieve 4 nines
                of availability, improved scalability and fault tolerance.
              </li>
              <li>
                I have carefully analyzed the entire architecture to identify
                bottlenecks, single point of failures and possibilities for
                improvements in terms of scalability and availability.
              </li>
              <li>
                Devised and implemented auto-scaling strategies and blue-green
                deployment strategy for the customer facing services to reduce
                downtime and improve reliability.
              </li>
              <li>
                Migrated 25+ services to utilize event-driven and serverless
                architecture (AWS Lambda, DynamoDB, S3, SQS, SNS, ECS, RDS).
                This resulted in 34% drop in the AWS monthly bill.
              </li>
              <li>
                I have introduced Terraform and Ansible in the team and migrated
                13 services to utilize IaC (Infrastructure as Code), as added
                CI/CD pipelines for 20+ services using Github Actions.
              </li>
              <li>
                Identified the technical use-cases and divided the application
                data into different database/storage solutions like AWS RDS,
                Elasticache, DynamoDB and AWS S3 standard and intelligent tier.
              </li>
            </ul>
            <h3>
              <span className="block mt-2 text-2xl font-bold tracking-tight leading-8 text-gray-900 dark:text-white sm:text-3xl">
                Tech Lead
              </span>
            </h3>
            <ul>
              <li>
                My first task a lead was to created a very product focused
                development team. I created a team of 8 engineers from 0 after
                filtering 500+ applications and conducting total of 100+ rounds
                of interviews.
              </li>
              <li>
                As a tech-lead I set up new codebase using modern technologies
                and establishing new coding standards.
              </li>
              <li>
                I have to ensure the quality of the implementation by reviewing
                code, approaches, deployment documents and test cases.
              </li>
              <li>I conduct monthly one-on-ones with my team to,</li>
              <ol className="ml-10">
                <li>
                  Get feedback on how we can improve the processes and workflows
                  to help the developers.
                </li>
                <li>
                  Provide them feedback on how they are doing and ask them what
                  we can do to help.
                </li>
                <li>
                  Help the development team to create and keep track of their
                  career/learning goals and mentor them to achieve their goals.
                </li>
              </ol>
            </ul>
            <h3>
              <span className="block mt-2 text-2xl font-bold tracking-tight leading-8 text-gray-900 dark:text-white sm:text-3xl">
                Technical Project Management
              </span>
            </h3>
            <li>
              One of my core responsibilities was to, define and implement
              end-to-end development processes and making sure they are well
              adopted.
            </li>
            <li>
              Designed 14 steps engineering project pipeline with detailed
              workflows and automated the progress tracking.
            </li>
            <ol className="ml-10">
              <li>
                <span className="py-1 px-2 text-base text-white bg-indigo-500 rounded">
                  <span role="presentation" className="pr-2" aria-hidden>
                    ❔
                  </span>
                  <span className="font-medium">
                    Technical Requirement Clarification
                  </span>
                </span>
                <ul>
                  <li>
                    While in this state, all the requirements are shared with
                    the engineering team and every part of the requirement is
                    dissected and clarified.
                  </li>
                  <li>
                    Many times, new cases/behavior are identified in this phase
                    and they are prioritized by the product manager.
                  </li>
                  <li>
                    Final version of the requirements and scope is freezed and
                    the team can now start doing the technical research.
                  </li>
                </ul>
              </li>
              <li>
                <span className="py-1 px-2 text-base text-white bg-indigo-500 rounded">
                  <span role="presentation" className="pr-2" aria-hidden>
                    🔬
                  </span>
                  <span className="font-medium">Technical Research</span>
                </span>
                <ul>
                  <li>
                    During this phase, the development team revisits the
                    existing system and find what parts of the system needs to
                    be changed or be created.
                  </li>
                  <li>
                    Also, if there are any technological barriers/hurdles
                    identified, the development team makes sure that, the
                    project version is technically feasible.
                  </li>
                  <li>
                    If there are multiple members in the team, some members are
                    doing technical feasibility analysis for the unsure parts
                    and the rest of the team identifies test cases.
                  </li>
                </ul>
              </li>
              <li>
                <span className="py-1 px-2 text-base text-white bg-indigo-500 rounded">
                  <span role="presentation" className="pr-2" aria-hidden>
                    🧪
                  </span>
                  <span className="font-medium">Test Case creation</span>
                </span>
                <ul>
                  <li>
                    Using the final requirements, a through list of test cases
                    are identified and documented.
                  </li>
                  <li>
                    The engineering manager or tech-lead reviews these cases and
                    finalizes the correct understanding of the requirements.
                  </li>
                </ul>
              </li>
              <li>
                <span className="py-1 px-2 text-base text-white bg-indigo-500 rounded">
                  <span role="presentation" className="pr-2" aria-hidden>
                    ⁉
                  </span>
                  <span className="font-medium">Approach Creation</span>
                </span>
                <ul>
                  <li>
                    After the approach has been finalized, the developer team
                    breaks down tasks in smaller chunks and allocates the task
                    between all involved developers.
                  </li>
                  <li>
                    Internal dependencies on the tasks are identified and tasks
                    are ordered based on that.
                  </li>
                  <li>
                    The Technical Project Manager or tech-lead reviews this
                    breakdown and tasks allocation and updates the priorities.{" "}
                  </li>
                </ul>
              </li>
              <li>
                <span className="py-1 px-2 text-base text-white bg-indigo-500 rounded">
                  <span role="presentation" className="pr-2" aria-hidden>
                    💭
                  </span>
                  <span className="font-medium">Task Estimation</span>
                </span>
                <ul>
                  <li>
                    After task breakdown and allocation, every developer
                    estimates the effort in terms of man-hours
                  </li>
                  <li>
                    After having man-hour estimate for every task, and list of
                    internal dependencies, a development deadline is calculated
                    with 20% buffer.
                  </li>
                  <li>
                    Once finalized, a deadline is communicated to the the TPM
                    and the Product Manager.
                  </li>
                </ul>
              </li>
              <li>
                <span className="py-1 px-2 text-base text-white bg-indigo-500 rounded">
                  <span role="presentation" className="pr-2" aria-hidden>
                    ⚒
                  </span>
                  <span className="font-medium">Development</span>
                </span>
                <ul>
                  <li>
                    The team starts developing the finalized approach and
                    writing test cases for functions they write.
                  </li>
                  <li>
                    While in development only, some demo's are scheduled. TMP
                    and the tech-lead provides feedback on the demo and changes
                    are incorporated.
                  </li>
                </ul>
              </li>

              <li>
                <span className="py-1 px-2 text-base text-white bg-indigo-500 rounded">
                  <span role="presentation" className="pr-2" aria-hidden>
                    🧪
                  </span>
                  <span className="font-medium">Developer Testing</span>
                </span>
                <ul>
                  <li>
                    Once done developing, the development team executes all of
                    the unit and e2e tests.
                  </li>
                  <li>
                    If some cases are failing, they are fixed and tests are run
                    again.
                  </li>
                </ul>
              </li>
              <li>
                <span className="py-1 px-2 text-base text-white bg-indigo-500 rounded">
                  <span role="presentation" className="pr-2" aria-hidden>
                    🧐
                  </span>
                  <span className="font-medium">Code Review</span>
                </span>
                <ul>
                  <li>
                    The team starts with peer reviews, If any comments are
                    provided they are fixed and reviewed again.
                  </li>
                  <li>
                    After the team is done with peer reviews, the tech-lead
                    reviews the pull request and changes are proposed.
                  </li>
                  <li>
                    After making the final changes, tests are run and code is
                    reviewed once again.
                  </li>
                </ul>
              </li>
              <li>
                <span className="py-1 px-2 text-base text-white bg-indigo-500 rounded">
                  <span role="presentation" className="pr-2" aria-hidden>
                    🥼
                  </span>
                  <span className="font-medium">Beta Testing</span>
                </span>
                <ul>
                  <li>
                    While the code review process is in progress, a working
                    build of the product is deployed on the staging environment
                    and the product team is asked to test it
                  </li>
                  <li>
                    If there are any bugs or feedback, they are fixed and
                    incorporated, tests are run and code review is performed{" "}
                  </li>
                </ul>
              </li>
              <li>
                <span className="py-1 px-2 text-base text-white bg-indigo-500 rounded">
                  <span role="presentation" className="pr-2" aria-hidden>
                    ☑
                  </span>
                  <span className="font-medium">Ready for Launch</span>
                </span>
                <ul>
                  <li>
                    Once all of the comments fixed, and the staging build is
                    approved, the project is parked here until the marketing
                    team is ready
                  </li>
                </ul>
              </li>
              <li>
                <span className="py-1 px-2 text-base text-white bg-indigo-500 rounded">
                  <span role="presentation" className="pr-2" aria-hidden>
                    🚀
                  </span>
                  <span className="font-medium">Launch & Live testing</span>
                </span>
                <ul>
                  <li>
                    If mission critical services are getting deployed, a
                    blue-green deployment strategy and A/B testing is applied
                    and services are launched one by one.
                  </li>
                  <li>
                    All the deployed services are tested in A/B testing mode and
                    it is checked for any bugs or issues by the entire team.
                  </li>
                  <li>
                    If there are any bugs found, they are prioritized based on
                    the severity and fixed.
                  </li>
                  <li>
                    If everything works out, the changes are rolled out to all
                    of the users.
                  </li>
                </ul>
              </li>
              <li>
                <span className="py-1 px-2 text-base text-white bg-indigo-500 rounded">
                  <span role="presentation" className="pr-2" aria-hidden>
                    🧐
                  </span>
                  <span className="font-medium">
                    Monitoring and health checks
                  </span>
                </span>
                <ul>
                  <li>
                    After the changes have been rolled out, the affected service
                    are observed for changes in terms of latency, throughput and
                    number of failed requests. If that goes above a threshold, a
                    cloud watch alarm is triggered and the team is notified.
                  </li>
                </ul>
              </li>

              <li>
                <span className="py-1 px-2 text-base text-white bg-indigo-500 rounded">
                  <span role="presentation" className="pr-2" aria-hidden>
                    ✅
                  </span>
                  <span className="font-medium">Complete</span>
                </span>
                <ul>
                  <li>
                    As a TPM, I was also responsible mitigating deadline risks
                    and conducting retrospective sessions to get more insights
                    and identify improvements as a team.
                  </li>
                </ul>
              </li>
            </ol>
            <p>
              As a TPM, I was also responsible mitigating deadline risks and
              conducting retrospective sessions to get more insights and
              identify improvements as a team.
            </p>
            <h2>Technical details</h2>
            <p>
              RAx is technically a complex product. It has many moving
              components and plugins, We primarily use the below mentioned
              technologies.
            </p>
            <h3>Frontend</h3>
            <ol>
              <li>
                NuxtJS
                <ul>
                  <li>
                    This is our primary frontend framework(VueJS), for a newer
                    version we might want to move away from this entirely.
                  </li>
                </ul>
              </li>
              <li>
                TailwindCSS
                <ul>
                  <li>We have adopted the TailwindCSS as our CSS framework.</li>
                </ul>
              </li>
              <li>
                TailwindUI
                <ul>
                  <li>
                    TailwindUI is the commercial version of the components
                    created by the TailwindCSS team.
                  </li>
                </ul>
              </li>
            </ol>
            <h3>Chrome Extension</h3>
            <ol>
              <li>
                VueJS
                <ul>
                  <li>
                    Product's chrome extension has been developed with VueJS
                  </li>
                </ul>
              </li>
            </ol>
            <h2>Backend</h2>
            <h3>Frameworks</h3>
            <ol>
              <li>
                Serverless Framework
                <ul>
                  <li>
                    We use serverless framework to develop AWS lambda functions.
                  </li>
                </ul>
              </li>
              <li>
                SailsJS
                <ul>
                  <li>
                    Earlier the entire backend was written with SailsJS, but now
                    we have started migration from the SailsJS to serverless
                    framework
                  </li>
                </ul>
              </li>
            </ol>
            <h3>Payment Gateway</h3>
            <ol>
              <li>
                Stripe
                <ul>
                  <li>
                    RAx has a complicated implementation of the payment gateway
                    integration. We are using billing API to charge customers in
                    monthly subscriptions. This is also made to support upfront
                    payments.
                  </li>
                </ul>
              </li>
            </ol>
            <h2>Infrastructure</h2>
            <ol>
              <li>
                AWS ECS
                <ul>
                  <li>
                    It is used as container orchestration service to increase
                    utilization and ensure redundancy. Services which can not be
                    migrated to AWS Lambda are run using ECS.
                  </li>
                </ul>
              </li>
              <li>
                AWS SQS
                <ul>
                  <li>
                    SQS is primarily used an event queue and other
                    services/lambda functions consume it.
                  </li>
                </ul>
              </li>
              <li>
                AWS Cloudwatch metrics
                <ul>
                  <li>
                    Cloudwatch metrics are used to trigger alarms, which
                    notifies developers in case of failures.
                  </li>
                </ul>
              </li>
              <li>
                AWS EC2 Instances
                <ul>
                  <li>
                    Many AI services still use EC2 instances inside ECS
                    clusters.
                  </li>
                </ul>
              </li>
              <li>
                AWS EBS Volumes
                <ul>
                  <li>
                    EBS Volumes are used to store large repository of Open
                    Access papers and user uploaded files, and Elastic search
                    indexes this and runs NLP models.
                  </li>
                </ul>
              </li>
              <li>
                AWS Cloudwatch logs
                <ul>
                  <li>Cloudwatch is used as logging service</li>
                </ul>
              </li>
              <li>
                AWS S3
                <ul>
                  <li>
                    This is our primary blob/object storage solution. We store
                    user files, invoices and our static website on S3.
                  </li>
                </ul>
                <ul>
                  <li>
                    User files S3 bucket utilized the intelligent tier of S3
                  </li>
                </ul>
              </li>
              <li>
                AWS Cloudfront
                <ul>
                  <li>
                    The landing page is being served using a cloudfront
                    distribution, also some User files are also served using
                    cloudfront
                  </li>
                </ul>
              </li>
              <li>
                AWS Auto Scaling Groups
                <ul>
                  <li>
                    RAx uses auto-scaling groups for to maintain the throughput
                    at unpredictable workloads
                  </li>
                </ul>
              </li>
              <li>
                AWS ALB
                <ul>
                  <li>ALBs are used in-front of the Auto Scaling Groups</li>
                </ul>
              </li>
              <li>
                AWS Lambda
                <ul>
                  <li>
                    AWS Lambda functions are created using serverless functions,
                    we have already migrated most important services to use
                    Lambda functions.
                  </li>
                </ul>
              </li>
              <li>
                API Gateway (for all HTTP and WebSocket requests)
                <ul>
                  <li>To server</li>
                </ul>
              </li>
            </ol>
            <h3>Databases</h3>
            <ol>
              <li>
                AWS RDS - MySQL
                <ul>
                  <li>
                    This is our primary database instance, all of the
                    application data is stored here.
                  </li>
                </ul>
              </li>
              <li>
                AWS DynamoDB
                <ul>
                  <li>
                    AWS DynamoDB is being used as cache store for socket
                    sessions.
                  </li>
                </ul>
              </li>
              <li>
                Redis
                <ul>
                  <li>The AI team uses redis in their dedicated server</li>
                </ul>
              </li>
            </ol>
            <h2>
              <span className="block mt-2 text-3xl font-bold tracking-tight leading-8 text-gray-900 dark:text-white sm:text-4xl">
                Challenges
              </span>
            </h2>
            <h3>Wearing multiple hats.</h3>
            <ul>
              <li>
                As I have my roles mixed with project management and technical
                lead, I have to put in a lot of efforts to justify each
                responsibility.
              </li>
            </ul>
            <ul>
              <li>
                It has been difficult but the it is one of the most proud things
                I have done.
              </li>
            </ul>
            <h3>
              Dealing with the technical debt, while maintaining the feature
              development pace.
            </h3>
            <ul>
              <li>
                RAx had a lot of technical debt, the team was focused on the AI
                side of the things, the user's side of the product suffered.
              </li>
            </ul>
            <ul>
              <li>
                I had to convert the solution from a MVP like stage to a
                production grade system, and there were ton of challenges, one
                of them was to improve the system while maintaining the feature
                development pace.
              </li>
            </ul>
            <h3>
              Defining engineering process which align with the end-to-end
              product development lifecycle.
            </h3>
            <ul>
              <li>
                When I started out with RAx, there were no clear guidelines on
                how they prioritize the engineering tasks, I had to do a lot of
                trial and error with processes to achieve a framework that works
                for the product team.
              </li>
            </ul>
            <h3>Building the team with very limited resources.</h3>
            <ul>
              <li>
                When I joined, RAx didn't have significant financial resources,
                So, I had to find excellent engineering resources with a
                constrained budget.
              </li>
            </ul>
            <h3>
              Training the team to think like a product person and not just as a
              developer.
            </h3>
            <ul>
              <li>
                This has been an issue with not just RAx, but I have rarely seen
                developers think like a product person, have opinions in terms
                of design and experience. And it is very important trait of the
                product development team. It took a while but it works{" "}
                <span aria-hidden>✨</span>
              </li>
            </ul>
            <h3>
              Making sure suggested architecture changes are implemented across
              multiple teams.
            </h3>
            <ul>
              <li>
                I was responsible for suggesting and taking architecture
                decisions across multiple teams and services. Coordinating the
                progress was a challenge.
              </li>
            </ul>{" "}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RAxWork;
