import * as fs from 'fs';
import * as xml2js from 'xml2js';
import { useEffect, useState } from 'react';
import { DOMParser } from 'xmldom'; // You might need to install xmldom for DOMParser

export const parser = () => {
    // 1. Read the XML file from the file system
    // const xmlFilePath = require('../assets/waypointA.gpx');
    // fs.readFile(xmlFilePath, 'utf-8', (err, xmlData) => {

    const [nodes, setNodes] = useState([]);

        useEffect(() => {
            fetch('/assets/waypointA.gpx')
              .then(response => response.text())
              .then(gpxData => {
                xml2js.parseString(gpxData, { explicitArray: false }, (err, result) => {
                  if (err) {
                    console.error('Error parsing XML:', err);
                    return;
                  }
        
                  // Adjust the result based on your GPX file structure
                  const osm = result.osm;
                  const nodes = osm.node || [];
                  setNodes(nodes);
                  console.log("nodes are", nodes)
                });
              })
              .catch(error => console.error('Error fetching GPX:', error));
          }, []);


    // // 2. Parse the XML content
    // const parser = new DOMParser();
    // const xmlDoc = parser.parseFromString(xmlData, 'text/xml');

    // // 3. Get all node elements
    // const nodeElements = xmlDoc.getElementsByTagName('node');

    // // 4. Create an array to hold all the nodes
    // interface NodeData {
    //     id: string;
    //     lat: string;
    //     lon: string;
    //     tags: { [key: string]: string };
    // }

    // const nodesArray: NodeData[] = [];

    // // 5. Iterate through each node and extract the attributes and tags
    // for (let i = 0; i < nodeElements.length; i++) {
    //     const nodeElement = nodeElements[i];

    //     // Get the node's attributes
    //     const id = nodeElement.getAttribute('id') || '';
    //     const lat = nodeElement.getAttribute('lat') || '';
    //     const lon = nodeElement.getAttribute('lon') || '';

    //     // Get all the tags for this node
    //     const tags: { [key: string]: string } = {};
    //     const tagElements = nodeElement.getElementsByTagName('tag');

    //     for (let j = 0; j < tagElements.length; j++) {
    //     const tagElement = tagElements[j];
    //     const key = tagElement.getAttribute('k') || '';
    //     const value = tagElement.getAttribute('v') || '';
    //     if (key) {
    //         tags[key] = value;
    //     }
    //     }

    //     // Add the node data to the array
    //     nodesArray.push({
    //     id,
    //     lat,
    //     lon,
    //     tags,
    //     });
    // }

    // // 6. Log the nodesArray to see the output
    // console.log(nodesArray);
    // return(nodesArray)
    // });
}