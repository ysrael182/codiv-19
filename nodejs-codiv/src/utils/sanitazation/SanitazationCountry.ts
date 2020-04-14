/**
 * @author Israel Yasis
 */


export function parseCountryName(countryName: string) {
    let arrayCountry = countryName.split(' ');
    arrayCountry.forEach(function(item, index) {
        arrayCountry[index] = item.replace(item[0], item[0].toUpperCase());
    });
    return arrayCountry.join(' ');
}