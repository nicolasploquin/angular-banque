import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  it('should create an instance', () => {
    const pipe = new CapitalizePipe();
    expect(pipe).toBeTruthy();
  });
  it('should format case', () => {
    const pipe = new CapitalizePipe();
    const prenom = 'jEAn-marC';
    expect(pipe.transform(prenom)).toBe('Jean-Marc');
  });
});
