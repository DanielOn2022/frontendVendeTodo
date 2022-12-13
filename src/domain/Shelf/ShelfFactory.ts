import { Section } from "../Section/Section";
import { SectionFactory } from "../Section/SectionFactory";
import { Shelf } from "./Shelf";

export class ShelfFactory {
    static createFromGraphql(graphqlShelf: any): Shelf {
  
      const sections = graphqlShelf.sections.map((section:Section)=>{
        return SectionFactory.createFromGraphql(section);
      })
      const shelf = new Shelf({
        id: graphqlShelf.id,
        shelfManagerId: graphqlShelf.shelfManagerId,
        sections: sections,
        sortedDate: graphqlShelf.sortedDate,
        warehouseManagerId: graphqlShelf.warehouseManagerId
      });
      return shelf;
    }
  }