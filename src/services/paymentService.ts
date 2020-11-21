import {Card} from '../models/card';
import {slimFetch, HttpResponse} from './apiService';
import {Deck} from '../models/deck';
import Environment from '../../environment';

/**
 * PaymentService
 */
export class PaymentService {
  private static readonly REACT_API_BASE_URL: string = Environment.BASE_URL;
  /**
   * Delivers the the amount of cards to buy, initializes the payment and retrieves a redirect link to paypal
   * @param authorization {string} - Authorization token
   * @param count {number} - Amount of cards to buy
   * @async
   * @method
   * @returns {Promise<HttpResponse<string>>} Promise fulfilled by redirect url to paypal
   */
  static async initializePayment(
    authorization: string,
    count: number,
  ): Promise<HttpResponse<string>> {
    return slimFetch(`${this.REACT_API_BASE_URL}/api/cards/buy`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authorization}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({amount: count}),
    });
  }

  /**
   * Executes the payment and retrieves unowned cards array
   * @param authorization {string} - Authorization token
   * @param count {number} - Amount of cards to buy
   * @param payerId {string} - PayerId of paypal user
   * @async paymentId {string} - Payment ID of initialized payment
   * @method
   * @returns {Promise<HttpResponse<Card[]>>} Promise fulfilled by cards array
   */
  static async executePaymentAndGetBoughtCards(
    authorization: string,
    count: number,
    payerId?: string,
    paymentId?: string,
  ): Promise<HttpResponse<Card[]>> {
    return slimFetch(`${this.REACT_API_BASE_URL}/api/cards/buy/execute`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authorization}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({payerId, paymentId, amount: count}),
    });
  }

  /**
   * Delivers the the amount of deckspaces to buy, initializes the payment and retrieves a redirect link to paypal
   * @param authorization {string} - Authorization token
   * @param count {number} - Amount of cards to buy
   * @async
   * @method
   * @returns {Promise<HttpResponse<string>>} Promise fulfilled by redirect url to paypal
   */
  static async initializePaymentforDeckSpaces(
    authorization: string,
    count: number,
  ): Promise<HttpResponse<string>> {
    return slimFetch(`${this.REACT_API_BASE_URL}/api/decks/buy`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authorization}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({amount: count}),
    });
  }

  /**
   * Executes the payment and retrieves amount of deckspaces
   * @param authorization {string} - Authorization token
   * @param count {number} - Amount of cards to buy
   * @param payerId {string} - PayerId of paypal user
   * @async paymentId {string} - Payment ID of initialized payment
   * @method
   * @returns {Promise<HttpResponse<Deck[]>>} Promise fulfilled by deck array
   */
  static async executePaymentAndGetBoughtDeckspaces(
    authorization: string,
    count: number,
    payerId?: string,
    paymentId?: string,
  ): Promise<HttpResponse<Deck[]>> {
    return slimFetch(`${this.REACT_API_BASE_URL}/api/decks/buy/execute`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authorization}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({payerId, paymentId, amount: count}),
    });
  }
}
