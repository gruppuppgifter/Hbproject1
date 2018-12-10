import { WindNamePipe } from './windName.pipe';

describe('windNamePipe finnas:', () => {
  it('finns', () => {
    const pipe = new WindNamePipe();
    expect(pipe).toBeTruthy();
  });

  it('ha transform function:', () => {
    const pipe = new WindNamePipe
    expect(pipe.transform).toBeTruthy();
  });
});
describe('Kollar vilket vädernamn den skriver (ska inte skriva):', () => {  
  it('- west by deg= 250', () => {
    expect(pipe.transform(250)).not.toBe("West");
  });

  it('- East by deg= 105', () => {
    expect(pipe.transform(105)).not.toBe("East");
  });
  it('- Northeast by deg= 65', () => {
    expect(pipe.transform(65)).not.toBe("Northeast");
  });
  it('- Northeast by deg= 30', () => {
    expect(pipe.transform(30)).not.toBe("Northeast");
  });

});

describe('Kollar om vädernamn är rätt (north of):', () => {
  it('- deg = 348.76', () => {
    const pipe = new WindNamePipe(); 
    expect(pipe.transform(348.76)).toBe("North");
  });
  it('- deg = 11.25', () => {
    const pipe = new WindNamePipe(); 
    expect(pipe.transform(11.25)).toBe("North");
  });
  
  it('- deg < 11.25', () => {
    const pipe = new WindNamePipe(); 
    expect(pipe.transform(4)).toBe("North");
  });
  it('- deg > 348.76', () => {
    const pipe = new WindNamePipe(); 
    expect(pipe.transform(352)).toBe("North");
  });
});
