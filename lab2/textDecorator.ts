interface InputText {
    operation(): string
}

class EnglishText implements InputText {
    inputText: string
    constructor(inputText: string) {
        this.inputText = inputText
    }
    public operation(): string {
        return this.inputText;
    }
}

class TextDecorator implements InputText {
    protected line: InputText;
    constructor(line: InputText) {
        this.line = line;
    }
    public operation(): string {
        return this.line.operation();
    }
}

class MakeBold extends TextDecorator {
    public operation(): string {
        return super.operation().bold();
    }
}

class MakeItalic extends TextDecorator {
    public operation(): string {
        return super.operation().italics();
    }
}

class MakeStrikeThrough extends TextDecorator {
    public operation(): string {
        return super.operation().strike();
    }
}

function print(line: InputText) {
    console.log(`output: ${line.operation()}`);
}


//runtime
const original = new EnglishText('decorate this line');
print(original);
const bold = new MakeBold(original);
print(bold);
const italicOnBold = new MakeItalic(bold);
print(italicOnBold);
const strikeOnBItalicOnBold = new MakeStrikeThrough(italicOnBold);
print(strikeOnBItalicOnBold);