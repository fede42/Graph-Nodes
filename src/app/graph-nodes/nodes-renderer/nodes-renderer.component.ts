import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/shared/services/data.service';
import { Network } from 'vis-network/standalone';
import { DataSet } from 'vis-data/standalone';

@Component({
  selector: 'app-nodes-renderer',
  templateUrl: './nodes-renderer.component.html',
  styleUrls: ['./nodes-renderer.component.css']
})
export class NodesRendererComponent implements OnInit{
  data: any[] = [];
  nodes = new DataSet<any>();
  edges = new DataSet<any>();
  network: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(responseData => {
      console.log("Fetched data:", responseData);
      this.data = responseData;
    
      // Map to keep track of nodes with the same category
      const categoryNodeMap = new Map<string, number>();
      const addedEdges = new Set<string>();
      this.data.forEach((item, index) => {
        this.nodes.add({
          id: index,
          label: item.subject,
          value: item.value,
          color: {
            background: this.getValueColor(item.value)
          }
        });

        if (item.category) {
          // Find all other items with the same category
          const sameCategoryItems = this.data.filter(node => node.category === item.category && node !== item);
          // Connect the current item to each other item with the same category
          sameCategoryItems.forEach(categoryItem => {
            const from = index;
            const to = this.data.findIndex(node => node === categoryItem);
            // Construct a unique key for the edge
            const edgeKey = `${Math.min(from, to)}_${Math.max(from, to)}`;
            // Check if the edge has already been added
            if (!addedEdges.has(edgeKey)) {
              // Add the edge and mark it as added
              this.edges.add({ from, to });
              addedEdges.add(edgeKey);
            }
          });
        }
      });
    
      const container = document.getElementById('network');
      if (container) {
        const data = {
          nodes: this.nodes,
          edges: this.edges
        };
        const options = {};
        this.network = new Network(container, data, options);
      } else {
        console.error("Container element 'network' not found.");
      }
    });
  }

  getValueColor(value: number): string {
    const hue = (value / 100) * 120;
    return `hsl(${hue}, 100%, 50%)`;
  }

}
