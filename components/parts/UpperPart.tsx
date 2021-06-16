const UpperPart = () => {
  return (
    <div>
      <h2>
        <span className="block mt-2 text-3xl font-bold tracking-tight leading-8 text-gray-900 dark:text-white sm:text-4xl">
          Responsibilities
        </span>
      </h2>
      <p>
        In this Product, I had to wear multiple hats and justify
        responsibilities of each role. Here is the summary of what I did in each
        role.
      </p>
      <h3>
        <span className="block mt-2 text-2xl font-bold tracking-tight leading-8 text-gray-900 dark:text-white sm:text-3xl">
          Product Architect
        </span>
      </h3>
      <ul>
        <li>
          I have been a part of every major architecture decision in the entire
          organization (Platform team, Web dev team & AI Team).
        </li>
        <li>
          I have redesigned the systems' architecture to achieve 4 nines of
          availability, improved scalability and fault tolerance.
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
          architecture (AWS Lambda, DynamoDB, S3, SQS, SNS, ECS, RDS). This
          resulted in 34% drop in the AWS monthly bill.
        </li>
        <li>
          I have introduced Terraform and Ansible in the team and migrated 13
          services to utilize IaC (Infrastructure as Code), as added CI/CD
          pipelines for 20+ services using Github Actions.
        </li>
        <li>
          Identified the technical use-cases and divided the application data
          into different database/storage solutions like AWS RDS, Elasticache,
          DynamoDB and AWS S3 standard and intelligent tier.
        </li>
      </ul>
      <h3>
        <span className="block mt-2 text-2xl font-bold tracking-tight leading-8 text-gray-900 dark:text-white sm:text-3xl">
          Tech Lead
        </span>
      </h3>
      <ul>
        <li>
          My first task a lead was to created a very product focused development
          team. I created a team of 8 engineers from 0 after filtering 500+
          applications and conducting total of 100+ rounds of interviews.
        </li>
        <li>
          As a tech-lead I set up new codebase using modern technologies and
          establishing new coding standards.
        </li>
        <li>
          I have to ensure the quality of the implementation by reviewing code,
          approaches, deployment documents and test cases.
        </li>
        <li>I conduct monthly one-on-ones with my team to,</li>
        <ol className="ml-10">
          <li>
            Get feedback on how we can improve the processes and workflows to
            help the developers.
          </li>
          <li>
            Provide them feedback on how they are doing and ask them what we can
            do to help.
          </li>
          <li>
            Help the development team to create and keep track of their
            career/learning goals and mentor them to achieve their goals.
          </li>
        </ol>
      </ul>
    </div>
  );
};

export default UpperPart;
