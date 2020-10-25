import { Card } from '../models/card';
import { slimFetch, HttpResponse } from './apiService';

/**
 * Card service
 */
export class CardService {
  private static readonly REACT_API_BASE_URL: string = 'http://localhost:5000';
  /**
   * Retrieves the card by id
   * @async
   * @method
   * @param cardId {number} - Card id
   * @returns {Promise<Card>}
   */
  static async getCard(cardId: number): Promise<Card> {
    const res = await slimFetch(`${this.REACT_API_BASE_URL}/api/cards/id/${cardId}`);
    return res.json();
  }

  /**
   * Retrieves all available cards
   * @async
   * @method
   * @returns {Promise<Card[]>} Promise fulfilled by array of cards
   */
  static async getCards(): Promise<HttpResponse<Card[]>> {
    return slimFetch(`${this.REACT_API_BASE_URL}/api/cards`);
  }

  /**
   * Delivers the the amount of cards to buy and retrieves the unowned cards
   * @param authorization {string} - Authorization token
   * @param count {number} - Amount of cards to buy
   * @async
   * @method
   * @returns {Promise<Card[]>} Promise fulfilled by array of cards
   */

  /**
   * Retrieves all owned cards
   * @param authorization {string} - Authorization token
   * @async
   * @method
   * @returns {Promise<Card[]>} Promise fulfilled by array of cards
   */
  static async getOwnedCards(authorization: string): Promise<HttpResponse<Card[]>> {
    return slimFetch(`${this.REACT_API_BASE_URL}/api/cards/owned`, {
      headers: {
        Authorization: `Bearer ${authorization}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }
}
