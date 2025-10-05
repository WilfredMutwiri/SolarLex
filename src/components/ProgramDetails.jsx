import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
const ProgramDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [program, setProgram] = useState(null);

  useEffect(() => {
    fetch("/data/programs.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.slug === id);
        setProgram(found);
      })
      .catch((err) => console.error("Error loading program:", err));
  }, [id]);

  if (!program) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold mb-4">Program not found</h2>
        <Button onClick={() => navigate("/")}>Go back</Button>
      </div>
    );
  }

  return (
    <div className="">
        <div>
                <section className="relative items-center justify-center overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${program.img})` }}
                  >
                    <div className="absolute inset-0 bg-black/50"></div>
                  </div>
            
                  <div className="relative container mx-auto px-4 py-20">
                    <div className=" mx-auto">
                      <div className="p-8 md:p-12 rounded-lg">
                        <h1 className="text-3xl md:text-6xl font-bold text-primary-foreground mb-6 uppercase tracking-tight">
                        {program.heading}
                        </h1>
                        <Button variant="secondary" size="lg" className="mx-auto w-40">
                          Donate today
                          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </section>
        </div>
      <Card className="p-8 shadow-lg">
        <h1 className="text-xl md:text-4xl font-bold mb-4">{program.title}</h1>
        <p className="text-lg text-muted-foreground mb-8">
          {program.description}
        </p>
        <div className="text-base leading-relaxed">
          {program.content.split("\n\n").map((paragraph,index)=>(
            <p key={index} className="mb-4 whitespace-pre-line">
                {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-8">
          <Button onClick={() => navigate("/")}>← Back to Programs</Button>
        </div>
      </Card>
    </div>
  );
};

export default ProgramDetail;
