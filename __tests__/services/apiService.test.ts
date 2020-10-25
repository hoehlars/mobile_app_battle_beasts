import {FetchMock} from 'jest-fetch-mock';
import {slimFetch} from '../../src/services/apiService';

describe('ApiService', () => {
  const fetchMock = fetch as FetchMock;
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('returns successfully', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        name: 'TestAnimal',
        type: 'Herbivore',
      }),
    );

    const card = await slimFetch('/api/test');

    expect(card).toMatchObject({
      parsedBody: {name: 'TestAnimal', type: 'Herbivore'},
    });
  });

  it('returns an error', async () => {
    fetchMock.mockRejectOnce(new Error('test'));

    await expect(slimFetch('/api/test')).rejects.toEqual(new Error('test'));
  });
});
