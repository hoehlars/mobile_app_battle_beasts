import {FetchMock} from 'jest-fetch-mock';
import {PaymentService} from '../../src/services/paymentService';

describe('PaymentService', () => {
  const fetchMock = fetch as FetchMock;
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should initialize a payment', async () => {
    fetchMock.mockResponseOnce(JSON.stringify('www.sandbox.paypal.com'));

    const redirectUrl: string = await (
      await PaymentService.initializePayment('mytoken', 2)
    ).json();
    expect(redirectUrl).toStrictEqual('www.sandbox.paypal.com');
    expect(fetchMock).toHaveBeenCalledWith(
      'http://localhost:5000/api/cards/buy',
      {
        body: '{"amount":2}',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer mytoken',
          'Content-Type': 'application/json',
        },
        method: 'POST',
      },
    );
  });

  it('should execute a payment and get new cards if payment was approved by paypal', async () => {
    fetchMock.mockResponseOnce(JSON.stringify([{cardId: 1, duplicate: false}]));
    const payerId = '1234';
    const paymentId = '1234';

    const card = await (
      await PaymentService.executePaymentAndGetBoughtCards(
        'mytoken',
        2,
        payerId,
        paymentId,
      )
    ).json();

    expect(card).toEqual([{cardId: 1, duplicate: false}]);
    expect(fetchMock).toHaveBeenCalledWith(
      'http://localhost:5000/api/cards/buy/execute',
      {
        body: '{"payerId":"1234","paymentId":"1234","amount":2}',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer mytoken',
          'Content-Type': 'application/json',
        },
        method: 'POST',
      },
    );
  });
});
