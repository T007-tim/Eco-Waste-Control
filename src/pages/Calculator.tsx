import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Delete, Divide, Minus, Plus, X, Equal, Percent } from "lucide-react";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputDigit = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? digit : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
      return;
    }
    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const clear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const deleteLastChar = () => {
    setDisplay(display.length === 1 ? "0" : display.slice(0, -1));
  };

  const percentage = () => {
    const value = parseFloat(display);
    setDisplay(String(value / 100));
  };

  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(display);
    } else if (operation) {
      const currentValue = parseFloat(previousValue);
      let result: number;

      switch (operation) {
        case "+":
          result = currentValue + inputValue;
          break;
        case "-":
          result = currentValue - inputValue;
          break;
        case "*":
          result = currentValue * inputValue;
          break;
        case "/":
          result = currentValue / inputValue;
          break;
        default:
          result = inputValue;
      }

      setDisplay(String(result));
      setPreviousValue(String(result));
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = () => {
    if (!operation || previousValue === null) return;

    const inputValue = parseFloat(display);
    const currentValue = parseFloat(previousValue);
    let result: number;

    switch (operation) {
      case "+":
        result = currentValue + inputValue;
        break;
      case "-":
        result = currentValue - inputValue;
        break;
      case "*":
        result = currentValue * inputValue;
        break;
      case "/":
        result = currentValue / inputValue;
        break;
      default:
        result = inputValue;
    }

    setDisplay(String(result));
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(true);
  };

  const buttonClass = "h-16 text-xl font-semibold transition-all duration-200 hover:scale-105 active:scale-95";

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-2xl border-2 border-primary/20 backdrop-blur-sm bg-card/95">
        <CardHeader className="pb-4">
          <CardTitle className="text-center text-2xl font-bold text-primary">Calculator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Display */}
          <div className="bg-muted/50 rounded-2xl p-6 border border-border/50">
            <div className="text-right text-sm text-muted-foreground h-6 overflow-hidden">
              {previousValue && operation && `${previousValue} ${operation}`}
            </div>
            <div className="text-right text-4xl font-bold text-foreground tracking-wider overflow-x-auto">
              {display}
            </div>
          </div>

          {/* Buttons Grid */}
          <div className="grid grid-cols-4 gap-3">
            {/* Row 1 */}
            <Button
              variant="secondary"
              className={`${buttonClass} bg-destructive/20 hover:bg-destructive/30 text-destructive`}
              onClick={clear}
            >
              AC
            </Button>
            <Button
              variant="secondary"
              className={buttonClass}
              onClick={deleteLastChar}
            >
              <Delete className="h-5 w-5" />
            </Button>
            <Button
              variant="secondary"
              className={buttonClass}
              onClick={percentage}
            >
              <Percent className="h-5 w-5" />
            </Button>
            <Button
              variant="default"
              className={`${buttonClass} bg-primary hover:bg-primary/80`}
              onClick={() => performOperation("/")}
            >
              <Divide className="h-5 w-5" />
            </Button>

            {/* Row 2 */}
            <Button variant="outline" className={buttonClass} onClick={() => inputDigit("7")}>7</Button>
            <Button variant="outline" className={buttonClass} onClick={() => inputDigit("8")}>8</Button>
            <Button variant="outline" className={buttonClass} onClick={() => inputDigit("9")}>9</Button>
            <Button
              variant="default"
              className={`${buttonClass} bg-primary hover:bg-primary/80`}
              onClick={() => performOperation("*")}
            >
              <X className="h-5 w-5" />
            </Button>

            {/* Row 3 */}
            <Button variant="outline" className={buttonClass} onClick={() => inputDigit("4")}>4</Button>
            <Button variant="outline" className={buttonClass} onClick={() => inputDigit("5")}>5</Button>
            <Button variant="outline" className={buttonClass} onClick={() => inputDigit("6")}>6</Button>
            <Button
              variant="default"
              className={`${buttonClass} bg-primary hover:bg-primary/80`}
              onClick={() => performOperation("-")}
            >
              <Minus className="h-5 w-5" />
            </Button>

            {/* Row 4 */}
            <Button variant="outline" className={buttonClass} onClick={() => inputDigit("1")}>1</Button>
            <Button variant="outline" className={buttonClass} onClick={() => inputDigit("2")}>2</Button>
            <Button variant="outline" className={buttonClass} onClick={() => inputDigit("3")}>3</Button>
            <Button
              variant="default"
              className={`${buttonClass} bg-primary hover:bg-primary/80`}
              onClick={() => performOperation("+")}
            >
              <Plus className="h-5 w-5" />
            </Button>

            {/* Row 5 */}
            <Button variant="outline" className={`${buttonClass} col-span-2`} onClick={() => inputDigit("0")}>0</Button>
            <Button variant="outline" className={buttonClass} onClick={inputDecimal}>.</Button>
            <Button
              className={`${buttonClass} bg-accent hover:bg-accent/80 text-accent-foreground`}
              onClick={calculate}
            >
              <Equal className="h-5 w-5" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Calculator;
