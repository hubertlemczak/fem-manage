const ListSection = () => {
  return (
    <section className="max-w-sm mx-auto justify-between md:flex md:max-w-none">
      <div className="mb-10 flex-1">
        <h2 className="text-center text-4xl font-bold text-darkBlue mb-5 leading-snug md:text-left">
          What's different about Manage?
        </h2>
        <p className="text-center max-w-xs mx-auto md:mx-0 md:text-left">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className="flex-1 md:max-w-lg">
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-brightRed rounded-full px-6 py-2 text-white font-semibold text-sm">
              01
            </div>
            <h3 className="font-bold text-darkBlue text-lg">
              Track company-wide progress
            </h3>
          </div>
          <p className="leading-8 font-semibold text-base md:ml-20">
            See how your day-to-day tasks fit into the wider vision. Go from
            tracking progress at the milestone level all the way done to the
            smallest of details. Never lose sight of the bigger picture again.
          </p>
        </div>
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-brightRed rounded-full px-6 py-2 text-white font-semibold text-sm">
              02
            </div>
            <h3 className="font-bold text-darkBlue text-lg">
              Advanced built-in reports
            </h3>
          </div>
          <p className="leading-8 font-semibold text-base md:ml-20">
            Set internal delivery estimates and track progress toward company
            goals. Our customisable dashboard helps you build out the reports
            you need to keep key stakeholders informed.
          </p>
        </div>
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-brightRed rounded-full px-6 py-2 text-white font-semibold text-sm">
              03
            </div>
            <h3 className="font-bold text-darkBlue text-lg">
              Everything you need in one place
            </h3>
          </div>
          <p className="leading-8 font-semibold text-base md:ml-20">
            Stop jumping from one service to another to communicate, store
            files, track tasks and share documents. Manage offers an all-in-one
            team productivity solution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ListSection;
