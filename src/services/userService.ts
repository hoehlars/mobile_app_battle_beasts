/**
 * User service
 */
export class UserService {
  private static readonly REACT_API_BASE_URL: string = 'http://localhost:5000';
  /**
   * Logs user in
   * @param values {any} - User data
   * @method
   * @async
   * @returns {Promise<Response>} Promise fulfilled by response
   */
  static async postLogin(values: any): Promise<Response> {
    return fetch(`${this.REACT_API_BASE_URL}/api/users/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
  }

  /**
   * Registers user
   * @param values {any} - User data
   * @method
   * @async
   * @returns {Promise<Response>} Promise fulfilled by response
   */
  static async postRegister(values: any): Promise<Response> {
    return fetch(`${this.REACT_API_BASE_URL}/api/users`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
  }

  /**
   * Get top ten users
   * @param
   * @method
   * @async
   * @returns {Promise<Response>} Promise fulfilled by response
   */
  static async getTopTenUsers(): Promise<Response> {
    return fetch(`${this.REACT_API_BASE_URL}/api/users/topten`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }

  /**
   * Get users above and below current users rank.
   * @param authorization {string} - Authorization Token
   * @method
   * @async
   * @returns {Promise<Response>} Promise fulfilled by response
   */
  static async getUsersAroundCurrUsersRank(
    authorization: string,
  ): Promise<Response> {
    return fetch(`${this.REACT_API_BASE_URL}/api/users/aroundyourrank`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authorization}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }
}
