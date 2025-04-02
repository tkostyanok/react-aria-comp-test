import { generateButtonClasses } from './helper';
describe('generateButtonClasses', () => {

  it('should always include react-aria-Button class', () => {
    // Test with no parameters
    expect(generateButtonClasses()).toContain('react-aria-Button');

    // Test with various parameter combinations
    expect(generateButtonClasses('primary', 'small', 'contained')).toContain('react-aria-Button');
    expect(generateButtonClasses('secondary', 'medium', 'outlined')).toContain('react-aria-Button');
    expect(generateButtonClasses('primary', undefined, 'outlined')).toContain('react-aria-Button');
  });

  it('should not include `color` classes when color is undefined', () => {
    const result = generateButtonClasses(undefined, 'medium', 'contained');

    expect(result).toContain('react-aria-Button');
    expect(result).not.toContain('Button--Primary--Contained');
    expect(result).not.toContain('Button--Primary--Outlined');
    expect(result).not.toContain('Button--Secondary--Contained');
    expect(result).not.toContain('Button--Secondary--Outlined');

    // Should still include size class
    expect(result).toContain('Button--Medium');
  });

  it('should return "Button--Primary--Contained" class when color is "primary" and variant is "contained"', () => {
    const result = generateButtonClasses('primary', undefined, 'contained');
    expect(result).toContain('Button--Primary--Contained');
  });

  it('should return "Button--Secondary--Outlined" class when color is "secondary" and variant is "outlined"', () => {
    const result = generateButtonClasses('secondary', undefined, 'outlined');
    expect(result).toContain('Button--Secondary--Outlined');
  });

  it('should return "Button--Small" class when size is "small"', () => {
    const result = generateButtonClasses(undefined, 'small', undefined);
    expect(result).toContain('Button--Small');
  });
});
