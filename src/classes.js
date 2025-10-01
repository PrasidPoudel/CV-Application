function Skill(uniqueKey, SkillName = "") {
  return {
    uniqueKey: uniqueKey,
    SkillName: SkillName,
  };
}

function workExperience(
  id,
  position,
  company,
  StartDate,
  EndDate,
  Description
) {
  return {
    id: id,
    position: position,
    company: company,
    StartDate: StartDate,
    EndDate: EndDate,
    Description: Description,
  };
}

export { Skill, workExperience };
