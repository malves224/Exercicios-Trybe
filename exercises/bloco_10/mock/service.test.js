const service = require('./service');

test("#randomRgbColor", () => {
 // testando quantas vezes a função foi chamada e qual seu retorno
 service.randomRgbColor = jest
 .fn()
 .mockReturnValue('default value')
 .mockReturnValueOnce('first call')
 .mockReturnValueOnce('second call');

expect(service.randomRgbColor).toHaveBeenCalledTimes(0);

expect(service.randomRgbColor()).toBe("first call");
expect(service.randomRgbColor).toHaveBeenCalledTimes(1);

expect(service.randomRgbColor()).toBe("second call");
expect(service.randomRgbColor).toHaveBeenCalledTimes(2);

expect(service.randomRgbColor()).toBe("default value");
expect(service.randomRgbColor).toHaveBeenCalledTimes(3);
});

test("#somar", () => {
  // testando se a função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno
  const mockSomar = jest.spyOn(service, "somar");

  mockSomar(1, 2);
  expect(mockSomar).toHaveBeenCalled();
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar).toHaveBeenCalledWith(1, 2);
  expect(mockSomar(1, 5)).toBe(6);
});