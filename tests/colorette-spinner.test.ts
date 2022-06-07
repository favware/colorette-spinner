import { Spinner } from '../src';

describe('Spinner', () => {
  test('GIVEN no text THEN runs spinner', () => {
    const spinner = new Spinner();

    const startSpy = vi.spyOn(spinner, 'start');
    const updateSpy = vi.spyOn(spinner, 'update');

    spinner.start();

    expect(startSpy).toHaveBeenCalled();
    expect(updateSpy).toHaveBeenCalledWith({ text: '', color: 'greenBright' });

    spinner.stop();
  });

  test('GIVEN text THEN runs spinner with text', () => {
    const spinner = new Spinner('very fast');

    const startSpy = vi.spyOn(spinner, 'start');
    const updateSpy = vi.spyOn(spinner, 'update');

    spinner.start();

    expect(startSpy).toHaveBeenCalled();
    expect(updateSpy).toHaveBeenCalledWith({ text: 'very fast', color: 'greenBright' });

    spinner.stop();
  });

  test('GIVEN custom color THEN runs spinner with custom color', () => {
    const spinner = new Spinner('', { color: 'redBright' });

    const startSpy = vi.spyOn(spinner, 'start');
    const updateSpy = vi.spyOn(spinner, 'update');

    spinner.start();

    expect(startSpy).toHaveBeenCalled();
    expect(updateSpy).toHaveBeenCalledWith({ text: '', color: 'redBright' });

    spinner.stop();
  });

  test('GIVEN error spinner THEN runs spinner and errors', () => {
    const spinner = new Spinner();

    const startSpy = vi.spyOn(spinner, 'start');
    const updateSpy = vi.spyOn(spinner, 'update');
    const errorSpy = vi.spyOn(spinner, 'error');
    const stopSpy = vi.spyOn(spinner, 'stop');

    spinner.start();

    expect(startSpy).toHaveBeenCalled();
    expect(updateSpy).toHaveBeenCalledWith({ text: '', color: 'greenBright' });

    spinner.error({ text: 'This was successful!' });

    expect(errorSpy).toHaveBeenCalledWith({ text: 'This was successful!' });
    expect(stopSpy).toHaveBeenCalledWith({ mark: expect.any(String), text: 'This was successful!' });
  });

  test('GIVEN success spinner THEN runs spinner and errors', () => {
    const spinner = new Spinner();

    const startSpy = vi.spyOn(spinner, 'start');
    const updateSpy = vi.spyOn(spinner, 'update');
    const errorSpy = vi.spyOn(spinner, 'error');
    const stopSpy = vi.spyOn(spinner, 'stop');
    const successSpy = vi.spyOn(spinner, 'success');

    spinner.start();

    expect(startSpy).toHaveBeenCalled();
    expect(updateSpy).toHaveBeenCalledWith({ text: '', color: 'greenBright' });

    spinner.success({ text: 'This was successful!' });

    expect(successSpy).toHaveBeenCalledWith({ text: 'This was successful!' });
    expect(stopSpy).toHaveBeenCalledWith({ mark: expect.any(String), text: 'This was successful!' });
    expect(errorSpy).not.toHaveBeenCalled();
  });

  test('GIVEN resetting spinner THEN runs spinner and errors', () => {
    const spinner = new Spinner();

    const startSpy = vi.spyOn(spinner, 'start');
    const updateSpy = vi.spyOn(spinner, 'update');
    const resetSpy = vi.spyOn(spinner, 'reset');

    spinner.start();

    expect(startSpy).toHaveBeenCalled();
    expect(updateSpy).toHaveBeenCalledWith({ text: '', color: 'greenBright' });

    spinner.reset();

    expect(resetSpy).toHaveBeenCalled();

    spinner.stop();
  });
});
