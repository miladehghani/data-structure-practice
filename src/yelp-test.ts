export interface ClickData {
  source: string;
  destination: string;
}

export class ClickTracker {
  structuredData: { [index: string]: string[] };

  constructor(clickData: ClickData[]) {
    this.structuredData = this.getStructuredData(clickData);
  }

  private getStructuredData = (clickData: ClickData[]) => {
    let output: any = {};
    clickData.forEach((data) => {
      if (!output[data.source]) output[data.source] = [data.destination];
      else output[data.source].push(data.destination);
    });
    return output;
  };

  getDestination = (source: string, visited: any = {}): string[] => {
    const dest: string[] = this.structuredData[source];

    if (dest && dest.length > 0) {
      const output: string[] = [];
      dest.forEach((d) => {
        if (visited[d]) return []; //throw "cycle found";

        visited[d] = true;
        output.push(...this.getDestination(d, visited));
      });
      return output;
    } else {
      return [source];
    }
  };
}
