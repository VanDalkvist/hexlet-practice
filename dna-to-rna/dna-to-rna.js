const rules = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
};

module.exports = function _dnaToRna(dna) {
    if (!dna) return '';

    const nucleotides = Array.from(dna);

    let rna = '';
    for (const nucleotide of nucleotides) {
        const converted = rules[nucleotide];
        if (!converted) {
            return null;
        }

        rna += converted;
    }

    return rna;
};