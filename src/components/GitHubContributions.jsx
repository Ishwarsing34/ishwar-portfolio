import {GitHubCalendar} from "react-github-calendar";

const GitHubContributions = () => {
  return (
    <section className="py-24">

      <h2 className="text-3xl font-semibold text-center mb-12">
        GitHub Contributions
      </h2>

      <div className="max-w-4xl mx-auto px-4">

       <div className="flex justify-center  origin-top">

                <GitHubCalendar
                    username="Ishwarsing34"
                    blockSize={12}
                    blockMargin={3}
                    fontSize={14}
                    colorScheme="light"
                    theme={{
                    light: [
                        "#696969",
                        "#d8b4fe",
                        "#c084fc",
                        "#a855f7",
                        "#6b21a8",
                    ],
                    }}

                />

</div>


      </div>

    </section>
  );
};

export default GitHubContributions;
