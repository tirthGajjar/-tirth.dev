const Tpm = () => {
  return (
    <div>
      <h3>
        <span className="block mt-2 text-2xl font-bold tracking-tight leading-8 text-gray-900 dark:text-white sm:text-3xl">
          Technical Project Management
        </span>
      </h3>
      <li>
        One of my core responsibilities was to, define and implement end-to-end
        development processes and making sure they are well adopted.
      </li>
      <li>
        Designed 14 steps engineering project pipeline with detailed workflows
        and automated the progress tracking.
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
              While in this state, all the requirements are shared with the
              engineering team and every part of the requirement is dissected
              and clarified.
            </li>
            <li>
              Many times, new cases/behavior are identified in this phase and
              they are prioritized by the product manager.
            </li>
            <li>
              Final version of the requirements and scope is freezed and the
              team can now start doing the technical research.
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
              During this phase, the development team revisits the existing
              system and find what parts of the system needs to be changed or be
              created.
            </li>
            <li>
              Also, if there are any technological barriers/hurdles identified,
              the development team makes sure that, the project version is
              technically feasible.
            </li>
            <li>
              If there are multiple members in the team, some members are doing
              technical feasibility analysis for the unsure parts and the rest
              of the team identifies test cases.
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
              Using the final requirements, a through list of test cases are
              identified and documented.
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
              After the approach has been finalized, the developer team breaks
              down tasks in smaller chunks and allocates the task between all
              involved developers.
            </li>
            <li>
              Internal dependencies on the tasks are identified and tasks are
              ordered based on that.
            </li>
            <li>
              The Technical Project Manager or tech-lead reviews this breakdown
              and tasks allocation and updates the priorities.{" "}
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
              After task breakdown and allocation, every developer estimates the
              effort in terms of man-hours
            </li>
            <li>
              After having man-hour estimate for every task, and list of
              internal dependencies, a development deadline is calculated with
              20% buffer.
            </li>
            <li>
              Once finalized, a deadline is communicated to the the TPM and the
              Product Manager.
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
              The team starts developing the finalized approach and writing test
              cases for functions they write.
            </li>
            <li>
              While in development only, some demo's are scheduled. TMP and the
              tech-lead provides feedback on the demo and changes are
              incorporated.
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
              Once done developing, the development team executes all of the
              unit and e2e tests.
            </li>
            <li>
              If some cases are failing, they are fixed and tests are run again.
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
              The team starts with peer reviews, If any comments are provided
              they are fixed and reviewed again.
            </li>
            <li>
              After the team is done with peer reviews, the tech-lead reviews
              the pull request and changes are proposed.
            </li>
            <li>
              After making the final changes, tests are run and code is reviewed
              once again.
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
              While the code review process is in progress, a working build of
              the product is deployed on the staging environment and the product
              team is asked to test it
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
              Once all of the comments fixed, and the staging build is approved,
              the project is parked here until the marketing team is ready
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
              If mission critical services are getting deployed, a blue-green
              deployment strategy and A/B testing is applied and services are
              launched one by one.
            </li>
            <li>
              All the deployed services are tested in A/B testing mode and it is
              checked for any bugs or issues by the entire team.
            </li>
            <li>
              If there are any bugs found, they are prioritized based on the
              severity and fixed.
            </li>
            <li>
              If everything works out, the changes are rolled out to all of the
              users.
            </li>
          </ul>
        </li>
        <li>
          <span className="py-1 px-2 text-base text-white bg-indigo-500 rounded">
            <span role="presentation" className="pr-2" aria-hidden>
              🧐
            </span>
            <span className="font-medium">Monitoring and health checks</span>
          </span>
          <ul>
            <li>
              After the changes have been rolled out, the affected service are
              observed for changes in terms of latency, throughput and number of
              failed requests. If that goes above a threshold, a cloud watch
              alarm is triggered and the team is notified.
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
              As a TPM, I was also responsible mitigating deadline risks and
              conducting retrospective sessions to get more insights and
              identify improvements as a team.
            </li>
          </ul>
        </li>
      </ol>
      <p>
        As a TPM, I was also responsible mitigating deadline risks and
        conducting retrospective sessions to get more insights and identify
        improvements as a team.
      </p>
    </div>
  );
};
export default Tpm;
