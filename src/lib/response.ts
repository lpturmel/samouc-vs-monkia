export interface CharRes {
  name: string
  race: string
  class: string
  active_spec_name: string
  active_spec_role: string
  gender: string
  faction: string
  achievement_points: number
  honorable_kills: number
  thumbnail_url: string
  region: string
  realm: string
  last_crawled_at: string
  profile_url: string
  profile_banner: string
  mythic_plus_scores_by_season: MythicPlusScoresBySeason[]
  mythic_plus_ranks: MythicPlusRanks
  gear: Gear
}

export interface MythicPlusScoresBySeason {
  season: string
  scores: Scores
  segments: Segments
}

export interface Scores {
  all: number
  dps: number
  healer: number
  tank: number
  spec_0: number
  spec_1: number
  spec_2: number
  spec_3: number
}

export interface Segments {
  all: All
  dps: Dps
  healer: Healer
  tank: Tank
  spec_0: Spec0
  spec_1: Spec1
  spec_2: Spec2
  spec_3: Spec3
}

export interface All {
  score: number
  color: string
}

export interface Dps {
  score: number
  color: string
}

export interface Healer {
  score: number
  color: string
}

export interface Tank {
  score: number
  color: string
}

export interface Spec0 {
  score: number
  color: string
}

export interface Spec1 {
  score: number
  color: string
}

export interface Spec2 {
  score: number
  color: string
}

export interface Spec3 {
  score: number
  color: string
}

export interface MythicPlusRanks {
  overall: Overall
  class: Class
  faction_overall: FactionOverall
  faction_class: FactionClass
  tank: Tank2
  class_tank: ClassTank
  faction_tank: FactionTank
  faction_class_tank: FactionClassTank
  healer: Healer2
  class_healer: ClassHealer
  faction_healer: FactionHealer
  faction_class_healer: FactionClassHealer
  dps: Dps2
  class_dps: ClassDps
  faction_dps: FactionDps
  faction_class_dps: FactionClassDps
  spec_268: Spec268
  faction_spec_268: FactionSpec268
  spec_270: Spec270
  faction_spec_270: FactionSpec270
  spec_269: Spec269
  faction_spec_269: FactionSpec269
}

export interface Overall {
  world: number
  region: number
  realm: number
}

export interface Class {
  world: number
  region: number
  realm: number
}

export interface FactionOverall {
  world: number
  region: number
  realm: number
}

export interface FactionClass {
  world: number
  region: number
  realm: number
}

export interface Tank2 {
  world: number
  region: number
  realm: number
}

export interface ClassTank {
  world: number
  region: number
  realm: number
}

export interface FactionTank {
  world: number
  region: number
  realm: number
}

export interface FactionClassTank {
  world: number
  region: number
  realm: number
}

export interface Healer2 {
  world: number
  region: number
  realm: number
}

export interface ClassHealer {
  world: number
  region: number
  realm: number
}

export interface FactionHealer {
  world: number
  region: number
  realm: number
}

export interface FactionClassHealer {
  world: number
  region: number
  realm: number
}

export interface Dps2 {
  world: number
  region: number
  realm: number
}

export interface ClassDps {
  world: number
  region: number
  realm: number
}

export interface FactionDps {
  world: number
  region: number
  realm: number
}

export interface FactionClassDps {
  world: number
  region: number
  realm: number
}

export interface Spec268 {
  world: number
  region: number
  realm: number
}

export interface FactionSpec268 {
  world: number
  region: number
  realm: number
}

export interface Spec270 {
  world: number
  region: number
  realm: number
}

export interface FactionSpec270 {
  world: number
  region: number
  realm: number
}

export interface Spec269 {
  world: number
  region: number
  realm: number
}

export interface FactionSpec269 {
  world: number
  region: number
  realm: number
}

export interface Gear {
  updated_at: string
  item_level_equipped: number
  item_level_total: number
  artifact_traits: number
  corruption: Corruption
  items: Items
}

export interface Corruption {
  added: number
  resisted: number
  total: number
  cloakRank: number
  spells: any[]
}

export interface Items {
  head: Head
  neck: Neck
  shoulder: Shoulder
  back: Back
  chest: Chest
  waist: Waist
  wrist: Wrist
  hands: Hands
  legs: Legs
  feet: Feet
  finger1: Finger1
  finger2: Finger2
  trinket1: Trinket1
  trinket2: Trinket2
  mainhand: Mainhand
  offhand: Offhand
}

export interface Head {
  item_id: number
  item_level: number
  icon: string
  name: string
  item_quality: number
  is_legendary: boolean
  is_azerite_armor: boolean
  azerite_powers: AzeritePower | undefined[]
  corruption: Corruption2
  domination_shards: any[]
  tier: string
  gems: any[]
  bonuses: number[]
}

export interface AzeritePower {
  id: number
  spell: Spell
  tier: number
}

export interface Spell {
  id: number
  school: number
  icon: string
  name: string
  rank: any
}

export interface Corruption2 {
  added: number
  resisted: number
  total: number
}

export interface Neck {
  item_id: number
  item_level: number
  icon: string
  name: string
  item_quality: number
  is_legendary: boolean
  is_azerite_armor: boolean
  azerite_powers: any[]
  corruption: Corruption3
  domination_shards: any[]
  gems: number[]
  bonuses: number[]
}

export interface Corruption3 {
  added: number
  resisted: number
  total: number
}

export interface Shoulder {
  item_id: number
  item_level: number
  icon: string
  name: string
  item_quality: number
  is_legendary: boolean
  is_azerite_armor: boolean
  azerite_powers: AzeritePower2 | undefined[]
  corruption: Corruption4
  domination_shards: any[]
  tier: string
  gems: any[]
  bonuses: number[]
}

export interface AzeritePower2 {
  id: number
  spell: Spell2
  tier: number
}

export interface Spell2 {
  id: number
  school: number
  icon: string
  name: string
  rank: any
}

export interface Corruption4 {
  added: number
  resisted: number
  total: number
}

export interface Back {
  item_id: number
  item_level: number
  enchant: number
  icon: string
  name: string
  item_quality: number
  is_legendary: boolean
  is_azerite_armor: boolean
  azerite_powers: any[]
  corruption: Corruption5
  domination_shards: any[]
  gems: any[]
  bonuses: number[]
}

export interface Corruption5 {
  added: number
  resisted: number
  total: number
}

export interface Chest {
  item_id: number
  item_level: number
  enchant: number
  icon: string
  name: string
  item_quality: number
  is_legendary: boolean
  is_azerite_armor: boolean
  azerite_powers: any[]
  corruption: Corruption6
  domination_shards: any[]
  tier: string
  gems: any[]
  bonuses: number[]
}

export interface Corruption6 {
  added: number
  resisted: number
  total: number
}

export interface Waist {
  item_id: number
  item_level: number
  icon: string
  name: string
  item_quality: number
  is_legendary: boolean
  is_azerite_armor: boolean
  azerite_powers: any[]
  corruption: Corruption7
  domination_shards: any[]
  gems: any[]
  bonuses: number[]
}

export interface Corruption7 {
  added: number
  resisted: number
  total: number
}

export interface Wrist {
  item_id: number
  item_level: number
  enchant: number
  icon: string
  name: string
  item_quality: number
  is_legendary: boolean
  is_azerite_armor: boolean
  azerite_powers: any[]
  corruption: Corruption8
  domination_shards: any[]
  gems: number[]
  bonuses: number[]
}

export interface Corruption8 {
  added: number
  resisted: number
  total: number
}

export interface Hands {
  item_id: number
  item_level: number
  icon: string
  name: string
  item_quality: number
  is_legendary: boolean
  is_azerite_armor: boolean
  azerite_powers: any[]
  corruption: Corruption9
  domination_shards: any[]
  tier: string
  gems: any[]
  bonuses: number[]
}

export interface Corruption9 {
  added: number
  resisted: number
  total: number
}

export interface Legs {
  item_id: number
  item_level: number
  enchant: number
  icon: string
  name: string
  item_quality: number
  is_legendary: boolean
  is_azerite_armor: boolean
  azerite_powers: any[]
  corruption: Corruption10
  domination_shards: any[]
  gems: any[]
  bonuses: number[]
}

export interface Corruption10 {
  added: number
  resisted: number
  total: number
}

export interface Feet {
  item_id: number
  item_level: number
  enchant: number
  icon: string
  name: string
  item_quality: number
  is_legendary: boolean
  is_azerite_armor: boolean
  azerite_powers: any[]
  corruption: Corruption11
  domination_shards: any[]
  gems: any[]
  bonuses: number[]
}

export interface Corruption11 {
  added: number
  resisted: number
  total: number
}

export interface Finger1 {
  item_id: number
  item_level: number
  enchant: number
  icon: string
  name: string
  item_quality: number
  is_legendary: boolean
  is_azerite_armor: boolean
  azerite_powers: any[]
  corruption: Corruption12
  domination_shards: any[]
  gems: any[]
  bonuses: number[]
}

export interface Corruption12 {
  added: number
  resisted: number
  total: number
}

export interface Finger2 {
  item_id: number
  item_level: number
  enchant: number
  icon: string
  name: string
  item_quality: number
  is_legendary: boolean
  is_azerite_armor: boolean
  azerite_powers: any[]
  corruption: Corruption13
  domination_shards: any[]
  gems: number[]
  bonuses: number[]
}

export interface Corruption13 {
  added: number
  resisted: number
  total: number
}

export interface Trinket1 {
  item_id: number
  item_level: number
  icon: string
  name: string
  item_quality: number
  is_legendary: boolean
  is_azerite_armor: boolean
  azerite_powers: any[]
  corruption: Corruption14
  domination_shards: any[]
  gems: any[]
  bonuses: number[]
}

export interface Corruption14 {
  added: number
  resisted: number
  total: number
}

export interface Trinket2 {
  item_id: number
  item_level: number
  icon: string
  name: string
  item_quality: number
  is_legendary: boolean
  is_azerite_armor: boolean
  azerite_powers: any[]
  corruption: Corruption15
  domination_shards: any[]
  gems: any[]
  bonuses: number[]
}

export interface Corruption15 {
  added: number
  resisted: number
  total: number
}

export interface Mainhand {
  item_id: number
  item_level: number
  enchant: number
  icon: string
  name: string
  item_quality: number
  is_legendary: boolean
  is_azerite_armor: boolean
  azerite_powers: any[]
  corruption: Corruption16
  domination_shards: any[]
  gems: any[]
  bonuses: number[]
}

export interface Corruption16 {
  added: number
  resisted: number
  total: number
}

export interface Offhand {
  item_id: number
  item_level: number
  enchant: number
  icon: string
  name: string
  item_quality: number
  is_legendary: boolean
  is_azerite_armor: boolean
  azerite_powers: any[]
  corruption: Corruption17
  domination_shards: any[]
  gems: any[]
  bonuses: number[]
}

export interface Corruption17 {
  added: number
  resisted: number
  total: number
}

