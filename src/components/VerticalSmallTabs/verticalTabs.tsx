import ItemSelector from "./itemSelector";
import ContentDiv from "./ContentDiv";
import { useState } from "react";

const VerticalTabs = () => {
  const [selected, setSelected] = useState<string>("1");
  const handleSelection = (selected: string) => {
    setSelected(selected);
  };
  return (
    <div className="flex max-w-4xl">
      <div className="flex-col">
        <div
          onClick={() => {
            handleSelection("1");
          }}
        >
          <ItemSelector title="OnCampus" selected={selected == "1"} />
        </div>
        <div
          onClick={() => {
            handleSelection("2");
          }}
        >
          <ItemSelector title="Oneila" selected={selected == "2"} />
        </div>
        <div
          onClick={() => {
            handleSelection("3");
          }}
        >
          <ItemSelector title="RoBorregos" selected={selected == "3"} />
        </div>
        <div
          onClick={() => {
            handleSelection("4");
          }}
        >
          <ItemSelector title="Micronics" selected={selected == "4"} />
        </div>
      </div>
      <div className="flex align-middle items-center">
        <div className="h-fit w-fit">
          {selected == "1" ? (
            <ContentDiv
              Company="Tec de Monterrey OnCampus Intern"
              Proyects={["Croud Counting System"]}
              position="Software Engineer Intern"
              content="Croud Counting is a project being developed by Tec de Monterrey, for the analyzis of flux of people in public places, tracking of persons routes and classification of activities."
              techs={["FIWARE", "React", "MongoDB", "D3", "PyTorch"]}
            />
          ) : selected == "2" ? (
            <ContentDiv
              Company="Oneila"
              Proyects={[
                "Product Data Management System",
                "SIGER Data Management System",
              ]}
              position="Software Engineer Intern"
              content="Oneila is a company that provides different services oriented to data obtaning and managment. These proyects related to public data obtaning and its analysis, visualization and managment."
              techs={["React", "CosmoDB", "Python", "Playwright", "NodeJS"]}
            />
          ) : selected == "3" ? (
            <ContentDiv
              Company="RoBorregos"
              Proyects={["@Home", "RescueMaze", "WebDev Team"]}
              position="Software Developer and Project Manager"
              content="RoBorregos is the International Robotics Team of Tec de Monterrey, we participate in the RoboCup and develop various projects related to robotics, artificial intelligence and software development."
              techs={["ROS", "Python", "C++", "React", "NodeJS", "NextJS"]}
            />
          ) : selected == "4" ? (
            <ContentDiv
              Company="Micronics MX"
              Proyects={["BusTracker"]}
              position="Web Development Intern"
              content="BusTracker is a project developed for the managment of the largest bus float in Mexico. It is a web application that allows the tracking of the buses and the managment of bus stations and bussines units."
              techs={["React", "NodeJS", "Laravell", "MySQL"]}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default VerticalTabs;
