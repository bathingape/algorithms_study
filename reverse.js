// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
function reverse(str) {
    let result = '';

    for (let i = 1; i <= str.length; i++) {
        // 가장 뒤에 있는 문자열을 가장 첫번째로 넣는다.
        // ex) apple -> 4번째 idx 'e'를 리턴할 문자열 idx 0으로 보내야함.
        result += str[str.length - i];
    }
    return result;
}

console.log(reverse('Greetings!'));

// solution

function reverse(str) {
    return str.split('').reverse().join('');
}

function reverse(str) {
    let reversed = '';
    for (let character of str) {
        reversed = character + reversed;
    }
    return reversed;
}

function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}
