import React, { useState, useRef, useEffect } from 'react';
import { Pen, Image, Download, Trash } from 'lucide-react';

const PDFEditor = () => {
  const [selectedTool, setSelectedTool] = useState('pen');
  const [isDrawing, setIsDrawing] = useState(false);
  const [points, setPoints] = useState([]);
  const [stamps, setStamps] = useState([]);
  const canvasRef = useRef(null);
  const ctx = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      ctx.current = canvasRef.current.getContext('2d');
      initializeCanvas();
    }
  }, []);

  const initializeCanvas = () => {
    if (!canvasRef.current) return;
    
    // Set canvas size
    canvasRef.current.width = 800;
    canvasRef.current.height = 1000;
    
    // Set default styles
    ctx.current.strokeStyle = '#000000';
    ctx.current.lineWidth = 2;
    ctx.current.lineCap = 'round';
    ctx.current.lineJoin = 'round';
    
    // Clear canvas
    ctx.current.fillStyle = '#ffffff';
    ctx.current.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    
    // Redraw all points and stamps
    redrawCanvas();
  };

  const redrawCanvas = () => {
    if (!ctx.current) return;

    // Clear canvas
    ctx.current.fillStyle = '#ffffff';
    ctx.current.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    // Redraw all lines
    points.forEach(line => {
      ctx.current.beginPath();
      line.forEach((point, index) => {
        if (index === 0) {
          ctx.current.moveTo(point.x, point.y);
        } else {
          ctx.current.lineTo(point.x, point.y);
        }
      });
      ctx.current.stroke();
    });

    // Redraw all stamps
    stamps.forEach(stamp => {
      drawStamp(stamp);
    });
  };

  const startDrawing = (e) => {
    if (selectedTool !== 'pen') return;
    
    setIsDrawing(true);
    const { offsetX, offsetY } = getCoordinates(e);
    setPoints([...points, [{x: offsetX, y: offsetY}]]);
  };

  const draw = (e) => {
    if (!isDrawing || selectedTool !== 'pen') return;
    
    const { offsetX, offsetY } = getCoordinates(e);
    const currentLine = [...points[points.length - 1], {x: offsetX, y: offsetY}];
    
    setPoints(prevPoints => {
      const newPoints = [...prevPoints];
      newPoints[newPoints.length - 1] = currentLine;
      return newPoints;
    });

    // Draw the current line
    ctx.current.beginPath();
    ctx.current.moveTo(currentLine[currentLine.length - 2].x, currentLine[currentLine.length - 2].y);
    ctx.current.lineTo(offsetX, offsetY);
    ctx.current.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const getCoordinates = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    return {
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top
    };
  };

  const handleStampUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const stampSize = 100;
        const stamp = {
          image: img,
          x: canvasRef.current.width / 2 - stampSize / 2,
          y: canvasRef.current.height / 2 - stampSize / 2,
          width: stampSize,
          height: stampSize
        };
        setStamps(prevStamps => [...prevStamps, stamp]);
        drawStamp(stamp);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  const drawStamp = (stamp) => {
    ctx.current.drawImage(
      stamp.image,
      stamp.x,
      stamp.y,
      stamp.width,
      stamp.height
    );
  };

  const clearCanvas = () => {
    setPoints([]);
    setStamps([]);
    initializeCanvas();
  };

  const downloadCanvas = () => {
    const link = document.createElement('a');
    link.download = 'signed-document.png';
    link.href = canvasRef.current.toDataURL();
    link.click();
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-4">
      <div className="space-y-4">
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setSelectedTool('pen')}
            className={`flex items-center px-4 py-2 rounded ${
              selectedTool === 'pen'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            <Pen className="w-4 h-4 mr-2" />
            Pen
          </button>
          
          <div className="flex items-center">
            <input
              type="file"
              accept="image/*"
              onChange={handleStampUpload}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
            />
          </div>
          
          <button
            onClick={clearCanvas}
            className="flex items-center px-4 py-2 rounded bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            <Trash className="w-4 h-4 mr-2" />
            Clear
          </button>
          
          <button
            onClick={downloadCanvas}
            className="flex items-center px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
          >
            <Download className="w-4 h-4 mr-2" />
            Download
          </button>
        </div>

        <div className="border rounded-lg overflow-hidden">
          <canvas
            ref={canvasRef}
            className="bg-white w-full"
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
          />
        </div>
      </div>
    </div>
  );
};

export default PDFEditor;