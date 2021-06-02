import { Component, OnInit } from '@angular/core';
import jspdf from 'jspdf';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

	generarPDF(){
		var div = document.getElementById("tabla");
		var pdf = new jspdf();
		pdf.text("documento generado por jspdf",10,10);
		// pdf.fromHTML(div,30,30);
		pdf.save("reporte.pdf");
	}
  constructor() { }

  ngOnInit(): void {
  }

}
