export const orgTypes = {
  EXTRA: "課外活動団体",
  GENERAL: "一般学生団体",
  OTHER: "その他",
}

/**
 * orgTypeの文字列を正規化し、定数に揃える
 * @param {string} text
 */
export const normalizeOrgType = text => {
  if (text === "課外活動団体") return orgTypes.EXTRA
  else if (text === "一般学生団体") return orgTypes.GENERAL
  else if (text === "その他") return orgTypes.OTHER
  else throw new Error(`[normalizeOrgType] 予期しない入力値: ${text}`)
}

export const activityTypes = {
  PHYSICAL: "体育系",
  CULTURE: "文化系",
  ART: "芸術系",
  OTHER: "その他",
}

/**
 * activityTypeの文字列を正規化し、定数に揃える
 * @param {string} text
 */
export const normalizeActivityType = text => {
  if (text === "体育系") return activityTypes.PHYSICAL
  else if (text === "文化系") return activityTypes.CULTURE
  else if (text === "芸術系") return activityTypes.ART
  else if (text === "その他") return activityTypes.OTHER
  else throw new Error(`[normalizeActivityType] 予期しない入力値: ${text}`)
}
