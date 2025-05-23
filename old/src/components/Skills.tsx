import "../styles/_Skills.scss";
import "../../src/styles/_responsive.scss";

import GitHubIcon from "../../public/images/github.svg";
// src/components/Skills.tsx
import React from "react";

const categories = [
  {
    title: "フロントエンド",
    skills: Array(6).fill({
      name: "Git Hub",
      level: 4,
      description: "テキストテキストテキスト\nテキストテキストテキスト",
    }),
  },
  {
    title: "バックエンド",
    skills: Array(6).fill({
      name: "Git Hub",
      level: 3,
      description: "テキストテキストテキスト\nテキストテキストテキスト",
    }),
  },
  {
    title: "その他",
    skills: Array(6).fill({
      name: "Git Hub",
      level: 2,
      description: "テキストテキストテキスト\nテキストテキストテキスト",
    }),
  },
];

const Skills: React.FC = () => {
  return (
    <section className="skills">
      <h2 id="Skills" className="scroll-offset">
        Skills
      </h2>
      {categories.map((category, cIdx) => (
        <div key={cIdx} className="skill-category">
          <h3>{category.title}</h3>
          <div className="skill-grid">
            {category.skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <img src={GitHubIcon} alt={skill.name} />
                <h4>{skill.name}</h4>
                <p>
                  スキルレベル：{"★".repeat(skill.level)}
                  {"☆".repeat(5 - skill.level)}
                </p>
                <p className="skill-description">
                  {skill.description.split("\n").map((line: string, i: number) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
