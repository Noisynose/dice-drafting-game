import endpoint from "./hello";

describe('/api/hello', () => {
  it('should call json', () => {
    const mockRes = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    }

    endpoint(null, mockRes)

    expect(mockRes.json).toHaveBeenCalledTimes(1)
  })
})