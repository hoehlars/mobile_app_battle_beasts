export interface Card {
  cardId: number;
  attackPoints: number;
  defensePoints: number;
  actionPoints: number;
  spellName?: string;
  spellTarget?: 'player' | 'opponent';
  spellStrength?: number;
  name: string;
  type: string;
  description: string;
  isEquipment?: boolean;
  isSpell?: boolean;
  isPlayed?: boolean;
  mode?: 'attack' | 'defense';
  equipmentCard?: Card;
  spellCard?: Card;
  opponentSpellCard?: Card;
  uniquePlayId: number;
  needsTarget?: boolean;
  deckLimitation: number;
}
