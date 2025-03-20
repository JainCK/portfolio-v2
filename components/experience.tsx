import { workExperience } from "@/data";
import { Button } from "@/components/ui/moving-border";

const Experience = () => {
  return (
    <div className="py-20 h-auto w-full bg-slate-950" id="experience">
      <p className=" text-white text-center text-xl font-bold">
        My Work Experience
      </p>

      <div className="w-6xl max-h-full mt-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "oklch(0.129 0.042 264.695)",
            }}
            className="text-white dark:text-white border-white dark:border-black overflow-hidden"
          >
            <div className="flex lg:flex-row flex-col items-start p-4 py-6 md:p-6 lg:p-8 gap-4">
              <img
                src={card.thumbnail}
                alt={card.title}
                className="lg:w-32 md:w-24 w-20 h-20 object-cover rounded-lg"
              />
              <div className="lg:ms-5 flex-1">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
