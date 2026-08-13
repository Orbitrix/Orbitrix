import AiStartsThinking from "./BlogContents/AiStartsThinking"
import DroneLogistics from "./BlogContents/DroneLogistics"
import DroneSpeed from "./BlogContents/DroneSpeed"
import EffectiveDrones from "./BlogContents/EffectiveDrones"
import Innovation from "./BlogContents/Innovation"
import LocalAI from "./BlogContents/LocalAI"
import RobotDogs from "./BlogContents/RobotDogs"
import RobotTech from "./BlogContents/RobotsTech"
import SolarDrones from "./BlogContents/SolarDrones"
import Somaku from "./BlogContents/Somaku"
import WhatWeBuild from "./BlogContents/WhatWeBuild";

const BlogContent = ({ sku }: { sku: string }) => {
  if (sku == "robot-dogs") {
    return <RobotDogs />;
  } else if (sku == "drone-logistics") {
    return <DroneLogistics />;
  } else if (sku === "solar-drones") {
    return <SolarDrones />;
  } else if (sku === "drone-speed") {
    return <DroneSpeed />;
  } else if (sku === "effective-drones") {
    return <EffectiveDrones />;
  } else if (sku === "robots-tech") {
    return <RobotTech />;
  } else if (sku === "innovation") {
    return <Innovation />;
  } else if (sku === "localai") {
    return <LocalAI />;
  } else if (sku === "what-we-build") {
    return <WhatWeBuild />;
  } else if (sku === "somaku") {
    return <Somaku />;
  } else if (sku === "ai-starts-thinking") {
    return <AiStartsThinking />;
  }
}

export default BlogContent