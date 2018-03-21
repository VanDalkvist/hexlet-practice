const tape = require('tape');
const dnaToRna = require('./dna-to-rna');

tape('dna-to-rna', function (test) {

    test.equals(dnaToRna('ACGTGGTCTTAA'), 'UGCACCAGAAUU');
    test.equals(dnaToRna('CCGTA'), 'GGCAU');
    test.equals(dnaToRna(''), '');
    test.equals(dnaToRna('ACNTG'), null);

    test.end();
});