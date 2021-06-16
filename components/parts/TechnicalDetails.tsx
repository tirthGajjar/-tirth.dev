const TechnicalDetail =()=>{
    return (
      <div>
        <h2>Technical details</h2>
        <p>
          RAx is technically a complex product. It has many moving components
          and plugins, We primarily use the below mentioned technologies.
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
                TailwindUI is the commercial version of the components created
                by the TailwindCSS team.
              </li>
            </ul>
          </li>
        </ol>
        <h3>Chrome Extension</h3>
        <ol>
          <li>
            VueJS
            <ul>
              <li>Product's chrome extension has been developed with VueJS</li>
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
                Earlier the entire backend was written with SailsJS, but now we
                have started migration from the SailsJS to serverless framework
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
                SQS is primarily used an event queue and other services/lambda
                functions consume it.
              </li>
            </ul>
          </li>
          <li>
            AWS Cloudwatch metrics
            <ul>
              <li>
                Cloudwatch metrics are used to trigger alarms, which notifies
                developers in case of failures.
              </li>
            </ul>
          </li>
          <li>
            AWS EC2 Instances
            <ul>
              <li>
                Many AI services still use EC2 instances inside ECS clusters.
              </li>
            </ul>
          </li>
          <li>
            AWS EBS Volumes
            <ul>
              <li>
                EBS Volumes are used to store large repository of Open Access
                papers and user uploaded files, and Elastic search indexes this
                and runs NLP models.
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
                This is our primary blob/object storage solution. We store user
                files, invoices and our static website on S3.
              </li>
            </ul>
            <ul>
              <li>User files S3 bucket utilized the intelligent tier of S3</li>
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
                RAx uses auto-scaling groups for to maintain the throughput at
                unpredictable workloads
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
                AWS Lambda functions are created using serverless functions, we
                have already migrated most important services to use Lambda
                functions.
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
                This is our primary database instance, all of the application
                data is stored here.
              </li>
            </ul>
          </li>
          <li>
            AWS DynamoDB
            <ul>
              <li>
                AWS DynamoDB is being used as cache store for socket sessions.
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
      </div>
    );
}
export default TechnicalDetail