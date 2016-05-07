
describe('Roman Numeric Test', function() {    
    describe('Function', () => {
        it('is defined roman numeric', function() {
        expect(romanNumeric).toBeDefined();
    });
    
    });
        
    it('return  # 0', () => {
        expect(romanNumeric(0)).toBe('');
    });
    
    it('return I # 1', () => {
        expect(romanNumeric(1)).toBe('I');
    });
       
    it('return II # 2', () => {
        expect(romanNumeric(2)).toBe('II');
    }); 
    
    it('return III # 3', () => {
        expect(romanNumeric(3)).toBe('III');
    }); 
    
    it('return IV # 4', () => {
        expect(romanNumeric(4)).toBe('IV');
    }); 
    
    it('return V # 5', () => {
        expect(romanNumeric(5)).toBe('V');
    }); 
    
    it('return VI # 6', () => {
        expect(romanNumeric(6)).toBe('VI');
    }); 
    
    it('return VII # 7', () => {
        expect(romanNumeric(7)).toBe('VII');
    }); 
    
    it('return VIII # 8', () => {
        expect(romanNumeric(8)).toBe('VIII');
    }); 
    
    it('return IX # 9', () => {
        expect(romanNumeric(9)).toBe('IX');
    }); 
    
     it('return X # 10', () => {
        expect(romanNumeric(10)).toBe('X');
    }); 
    
    it('return XI # 11', () => {
        expect(romanNumeric(11)).toBe('XI');
    }); 
    
    it('return XII # 12', () => {
        expect(romanNumeric(12)).toBe('XII');
    }); 
    
    it('return XIII # 13', () => {
        expect(romanNumeric(13)).toBe('XIII');
    }); 
       
   it('return XIV # 14', () => {
        expect(romanNumeric(14)).toBe('XIV');
    });  
    
    it('return XXIV # 24', () => {
        expect(romanNumeric(24)).toBe('XXIV');
    }); 
    
    it('return XLIX # 49', () => {
        expect(romanNumeric(49)).toBe('XLIX');
    }); 
    
    it('return L # 50', () => {
        expect(romanNumeric(50)).toBe('L');
    }); 
    
    it('return C # 100', () => {
        expect(romanNumeric(100)).toBe('C');
    }); 
    
    it('return D # 500', () => {
        expect(romanNumeric(500)).toBe('D');
    }); 
    
    it('return MCMLXXXVII # 1987', () => {
        expect(romanNumeric(1987)).toBe('MCMLXXXVII');
    }); 
    
    it('return  # a', () => {
        expect(romanNumeric('a')).toBe('');
    });
    
    it('return  # -1', () => {
        expect(romanNumeric('-1')).toBe('');
    });
    
    it('return ^X # 10000', () =>{
        expect(romanNumeric(10000)).toBe('^X');
    });
    
    it('return  # 10001', () =>{
        expect(romanNumeric(10001)).toBe('');
    });
});
    