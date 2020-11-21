import Environment from '../../environment';

/**
 * Deck service
 */
export class DeckService {
  private static readonly REACT_API_BASE_URL: string = Environment.BASE_URL;
  /**
   * Retrieves all decks the user created
   * @param authorization {string} - Authorization token
   * @method
   * @async
   * @returns {Promise<Response>} Promise fulfilled by response
   */
  static async getDeck(authorization: string): Promise<Response> {
    return fetch(`${this.REACT_API_BASE_URL}/api/deck`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authorization}`,
      },
    });
  }

  /**
   * Updates a deck
   * @param authorization {string} - Authorization token
   * @param selectedDeckName {string} - Deck name
   * @param selcetedCards {number[]} - Cards in the deck
   * @returns {Promise<Response>} Promise fulfilled by response
   */
  static async patchDeck(
    authorization: string,
    selectedDeckName: string,
    selcetedCards: number[],
  ): Promise<Response> {
    return fetch(`${this.REACT_API_BASE_URL}/api/deck`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${authorization}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: selectedDeckName,
        cards: selcetedCards,
      }),
    });
  }

  /**
   * Updates a deck
   * @param authorization {string} - Authorization token
   * @param selectedDeckName {string} - Deck name
   * @param selcetedCards {number[]} - Cards in the deck
   * @param newDeckName {string} - New deck name
   * @returns {Promise<Response>} Promise fulfilled by response
   */
  static async patchDeckRename(
    authorization: string,
    selectedDeckName: string,
    newDeckName: string,
    selcetedCards: number[],
  ): Promise<Response> {
    return fetch(`${this.REACT_API_BASE_URL}/api/deck`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${authorization}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: selectedDeckName,
        newDeckName,
        cards: selcetedCards,
      }),
    });
  }

  /**
   * Creates a new deck
   * @param authorization {string} - Authorization token
   * @param createdDeckName {string} - Deck name
   * @param deckCards {number[]} - Cards in the deck
   * @method
   * @async
   * @returns {Promise<Response>} Promise fulfilled by response
   */
  static async postDeck(
    authorization: string,
    createdDeckName: string,
    deckCards: number[],
  ): Promise<Response> {
    return fetch(`${this.REACT_API_BASE_URL}/api/deck`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authorization}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: createdDeckName,
        cards: deckCards,
      }),
    });
  }

  /**
   * Delete a deck
   * @param authorization {string} - Authorization token
   * @param createdDeckName {string} - Deck name
   * @method
   * @async
   * @returns {Promise<Response>} Promise fulfilled by response
   */
  static async deleteDeck(
    authorization: string,
    createdDeckName: string,
  ): Promise<Response> {
    return fetch(`${this.REACT_API_BASE_URL}/api/deck`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${authorization}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: createdDeckName,
      }),
    });
  }

  /**
   * Retrieves amount of deck spaces owned and used
   * @param authorization {string} - Authorization token
   * @method
   * @async
   * @returns {Promise<Response>} Promise fulfilled by response
   */
  static async getDeckSpaces(authorization: string): Promise<Response> {
    return fetch(`${this.REACT_API_BASE_URL}/api/deck/spaces`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authorization}`,
      },
    });
  }

  /**
   * Retreives amount of deck spaces to buy and unlock them for the player
   * @param authorization {string} - Authorization token
   * @param amountOfDecks {number} - Amount of decks to buy
   * @method
   * @returns {Promise<Response>} Promise fulfilled by response
   */
  static async postDeckSpaces(
    authorization: string,
    amountOfDecks: number,
  ): Promise<Response> {
    return fetch(`${this.REACT_API_BASE_URL}/api/deck/spaces/buy`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authorization}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: amountOfDecks,
      }),
    });
  }
}
