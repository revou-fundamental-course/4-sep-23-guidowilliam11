document.addEventListener('DOMContentLoaded', function () {
    const optionA = document.getElementById('optionA');
    const optionB = document.getElementById('optionB');
    const bagianPersegi = document.getElementById('bagianPersegi');
    const bagianPersegiPanjang = document.getElementById('bagianPersegiPanjang');

    if (optionA.checked) {
        optionA.nextElementSibling.style.backgroundColor = 'rgb(73, 147, 238)';
        optionA.nextElementSibling.style.color = 'white';
        bagianPersegi.style.display = 'block';
        bagianPersegiPanjang.style.display = 'none';
    }

    if (optionB.checked) {
        optionB.nextElementSibling.style.backgroundColor = 'rgb(73, 147, 238)';
        optionB.nextElementSibling.style.color = 'white';
        bagianPersegi.style.display = 'none';
        bagianPersegiPanjang.style.display = 'block';
    }
    const radioButtons = document.querySelectorAll('.radio-button');
    
    radioButtons.forEach((radioButton) => {
        radioButton.addEventListener('change', function () {
            if (optionA.checked) {
                optionA.nextElementSibling.style.backgroundColor = 'rgb(73, 147, 238)';
                optionA.nextElementSibling.style.color = 'white';
                bagianPersegi.style.display = 'block';
                bagianPersegiPanjang.style.display = 'none';
            }
        
            if (optionB.checked) {
                optionB.nextElementSibling.style.backgroundColor = 'rgb(73, 147, 238)';
                optionB.nextElementSibling.style.color = 'white';
                bagianPersegi.style.display = 'none';
                bagianPersegiPanjang.style.display = 'block';
            }
            if (this.checked) {
                this.nextElementSibling.style.backgroundColor = 'rgb(73, 147, 238)';
                this.nextElementSibling.style.color = 'white';
                
                const otherRadioButtons = document.querySelectorAll('.radio-button:not(:checked)');
                otherRadioButtons.forEach((otherRadioButton) => {
                    otherRadioButton.nextElementSibling.style.backgroundColor = 'white';
                    otherRadioButton.nextElementSibling.style.color = 'rgb(73, 147, 238)';
                });
                
            }
        });
    });
});

const hitungBtn = document.getElementById('hitungBtnLuasPersegi');
const sisiluasPersegi = document.getElementById('sisiluasPersegi');
const hitungBtnPersegiPanjang = document.getElementById('hitungBtnLuasPersegiPanjang');
const panjangluasPersegiPanjang = document.getElementById('panjangluasPersegiPanjang');
const lebarluasPersegiPanjang = document.getElementById('lebarluasPersegiPanjang');
const hasilLuas = document.getElementById('hasilLuas');
const hasilLuasPersegiPanjang = document.getElementById('hasilLuasPersegiPanjang');

hitungBtn.addEventListener('click', function () {
    const sisi = parseFloat(sisiluasPersegi.value);

    if (!isNaN(sisi)) {
        const luas = sisi * sisi;

        hasilLuas.innerHTML = 'L = 4 x S<br>L = 4 x ' + sisi + '<br>L = ' + (4 * sisi) + '<br>Hasil = ' + luas + ' satuan';
    } else {
        hasilLuas.textContent = 'Nilai Sisi tidak valid';
    }
});

hitungBtnPersegiPanjang.addEventListener('click', function () {
    const a = parseFloat(panjangluasPersegiPanjang.value);
    const b = parseFloat(lebarluasPersegiPanjang.value);

    if (!isNaN(a) && !isNaN(b)) {
        const luas = a * b;
        hasilLuasPersegiPanjang.innerHTML = 'L = l x p<br>L = ' + a + ' x ' + b + '<br>Hasil = ' + luas + ' satuan';
    } else {
        hasilLuasPersegiPanjang.textContent = 'Nilai Sisi tidak valid';
    }
});

const hitungBtnKelilingPersegi = document.getElementById('hitungBtnKelilingPersegi');
const sisikelilingPersegi = document.getElementById('sisikelilingPersegi');
const hasilKeliling = document.getElementById('hasilKeliling');
const hitungBtnKelilingPersegiPanjang = document.getElementById('hitungBtnKelilingPersegiPanjang');
const panjangkelilingPersegiPanjang = document.getElementById('panjangkelilingPersegiPanjang');
const lebarkelilingPersegiPanjang = document.getElementById('lebarkelilingPersegiPanjang');
const hasilKelilingPersegiPanjang = document.getElementById('hasilKelilingPersegiPanjang');

hitungBtnKelilingPersegi.addEventListener('click', function () {
    const sisi = parseFloat(sisikelilingPersegi.value);

    if (!isNaN(sisi)) {
        const keliling = 4 * sisi;

        hasilKeliling.innerHTML = 'K = S x S<br>K = ' + sisi + ' x ' + sisi + '<br>Hasil Keliling = ' + keliling + ' satuan';
    } else {
        hasilKeliling.textContent = 'Nilai Sisi tidak valid';
    }
});

hitungBtnKelilingPersegiPanjang.addEventListener('click', function () {
    const a = parseFloat(panjangkelilingPersegiPanjang.value);
    const b = parseFloat(lebarkelilingPersegiPanjang.value);

    if (!isNaN(a) && !isNaN(b)) {
        const keliling = (2*a) + (2*b);
        hasilKelilingPersegiPanjang.innerHTML = 'K = 2l + 2p<br>K = 2' + a + ' + 2' + b + '<br>K = ' + (2 * a) + ' + ' + (2 * b) + '<br>Hasil = ' + keliling + ' satuan';
    } else {
        hasilKelilingPersegiPanjang.textContent = 'Nilai Sisi tidak valid';
    }
});

const resetBtnKelilingPersegi = document.getElementById('resetBtnKelilingPersegi');



resetBtnKelilingPersegi.addEventListener('click', function () {
    sisikelilingPersegi.value = '';

    hasilKeliling.textContent = 'Tolong Masukkan Sisi dan klik hitung';
});

const resetBtnLuasPersegi = document.getElementById('resetBtnLuasPersegi');

resetBtnLuasPersegi.addEventListener('click', function () {
    // Clear the input value
    sisiluasPersegi.value = '';

    // Reset the content of the hasilLuas div
    hasilLuas.textContent = 'Tolong Masukkan Sisi dan klik hitung';
});

const resetBtnLuasPersegiPanjang = document.getElementById('resetBtnLuasPersegiPanjang');

resetBtnLuasPersegiPanjang.addEventListener('click', function () {
    // Clear the input value
    panjangluasPersegiPanjang.value = '';
    lebarluasPersegiPanjang.value = '';

    // Reset the content of the hasilLuas div
    hasilLuasPersegiPanjang.textContent = 'Tolong Masukkan Sisi dan klik hitung';
});

const resetBtnKelilingPersegiPanjang = document.getElementById('resetBtnKelilingPersegiPanjang');

resetBtnKelilingPersegiPanjang.addEventListener('click', function () {
    // Clear the input value
    panjangkelilingPersegiPanjang.value = '';
    lebarkelilingPersegiPanjang.value = '';

    // Reset the content of the hasilLuas div
    hasilKelilingPersegiPanjang.textContent = 'Tolong Masukkan Sisi dan klik hitung';
});

