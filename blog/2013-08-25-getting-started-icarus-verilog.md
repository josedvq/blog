---
slug: getting-started-icarus-verilog
title: Getting started with Icarus Verilog on Windows
author: Jose Vargas
author_title: Engineer
author_url: https://github.com/josedvq
author_image_url: https://avatars0.githubusercontent.com/u/1315101?s=400&v=4
tags: [icarus, verilog, windows, hdl]
---

<a title="Icarus Verilog official website" href="http://iverilog.icarus.com/">Icarus Verilog</a> is a <a title="Article on Verilog Hardware Description Language" href="http://en.wikipedia.org/wiki/Verilog">Verilog standard IEEE-1364</a> compiler that targets Linux but works almost as well on Windows. It's lightweight, free software and includes a virtual machine that simulates the design. This tutorial goes through the process of downloading, installing and using Icarus Verilog to write a simple program, compile it, simulate it and view the simulation results on a timing diagram. It assumes no previous knowledge on Verilog, but prior programming experience is recommended.

<h2>Installing Icarus Verilog</h2>

Download Icarus Verilog latest stable release for Windows from: <a title="Get Icarus Verilog for Windows" href="http://bleyer.org/icarus/">bleyer.org/icarus</a>

Installing Icarus Verilog is as easy as installing any other Windows program. Just hit next, but be sure to select GTK Wave (full installation) and "Add Executables to Windows Path" option. You should be able to use it from a Command Prompt by now. On Windows Vista/7/8 press Windows key and type cmd to open a command prompt. Just type "iverilog" and you should get a message saying "iverilog: no source files" and some instructions. Type "gtkwave" and the GTKWave GUI should open. This program is used to view the simulation results graphically on a timing diagram.

If these commands are not recognized but the installation was successful chances are the executables were not added to Windows Path. See <a title="How to set the Path on Windows" href="http://www.computerhope.com/issues/ch000549.htm">How to set the Path on Windows</a> to add "C:\iverilog\bin" to Path manually.

<h2>Writing a simple program</h2>

Now you are ready to write your first Verilog program. For this tutorial we'll write a D type flip-flop description, that is, a Verilog module that works like a D flip-flop. At the same time you'll learn some of the basic Verilog concepts by example.  You'll also write a tester module to reproduce the following D flip-flop timing diagram:

<img class="aligncenter size-full wp-image-139" alt="D type flip-flop timing diagram" src="http://localhost:8888/cid/wp-content/uploads/2013/08/fftiming.gif" width="475" height="257" />

Verilog programs are separated in modules, which are functional blocks that have inputs, outputs and internal logic. You can think of them like the blocks on a circuit's block diagram, but in this case they work. There are two types of Verilog modules: behavioral modules and structural modules. Both may have the same behaviour but are different in the way they are written as you'll see throughout the example.

For the flip-flop program three modules are used: the flip-flop module, tester module and testbench module. The last two are modules you'll need on almost every design in order to test your circuit.

<h3>Flip-flop module</h3>

Represents a simple D type flip-flop. Receives a clock signal and D signal as inputs and outputs Q and QN signals. The outputs may change on the positive clock edge. The code for this module is:

```
module dff(d,clk,q,qn);
	input d,clk;
	output q,qn;
	reg q,qn;

	//Initialize flip-flop outputs
	initial begin q=0; qn=1; end

	//Change output on positive clock edge
	always @(posedge clk) 
	begin
		q &lt;= d;
		qn &lt;= !d;
	end
```

From this code, you can see the basic structure of every Verilog module. It starts with a declaration: <code>module dff(d,clk,q,qn);</code> and ends with <code>endmodule</code>. The declaration states the module's name and both its inputs and outputs. In the module we must declare which variables are inputs and which are outputs, using "input" and "output".

Variables in Verilog are wires or regs. A wire, like a real wire, has no memory. Thus Verilog wire variables do not retain their values by themselves. The reg keyword gives variables the ability to hold their values after they are assigned, until their value is changed, of course. We want this behaviour for the flip-flop's outputs so q and qn are defined as regs. If we use a wire the output is never seen by other blocks. It loses its value immediatly after any assignment. There is no need to define variables as wires, because they are all wires by default.

The way the inner logic of the module is written deppends on wether it is behavioral or structural. The flip-flop module is an example of behavioral code. That is, you describe the behavior the module should have. To do it, use initial and always blocks. The code within an initial block is executed once, when the flip-flop is created. In the example it's used to define q=0 and qn=1 initially. By default in Verilog the variables are undefined (represented by an "x"), not zero, not one. If we did'nt use this initial block q and qn would be left undefined until they are assigned for the first time.

The code within an always block is executed when a condition is met. In this case, when the clock has a positive edge, q and qn are reassigned. This describes completely the flip-flop's logic. As you can see, it is simple. When the condition is not met, Verilog keeps the outputs' values.

As a rule of thumb, when writing a behavioral module, define outputs as wires.

Verilog has control structures like while, if-else, case, for and repeat (similar to for) like most programming languages. These assist you on writting your behavioral code. For example, replacing the flip-flop module's always block by:
 
```
begin
	if(clk == 1)
	begin
		q &lt;= d;
		qn &lt;= !d;
	end
end
```

produces exactly the same behaviour. Some things changed. Now the always condition is <code>always @(clk) </code> instead of <code>always @(posedge clk) </code>. This means that now the always block is executed every time clk changes its value, on positive and negative edges. An always block can be triggered by any number of variables. For example, <code>@(clk or d)</code> would trigger it whenever clk or d change. This is used in combinational logic where the output is recalculated whenever an input changes. Back to the example, if <code>clk == 1</code> then the edge is positive. We check it using an if statement. Note that adding the "begin" and "end" keywords is necessary when any block (always, initial, if, for...) has more than one instruction. If omitted for the "if" statement above the second instruction: <code>qn &lt;= !d;</code> would be executed always (it would be ouside of the if statement). These two keywords act like the curly brackets on many programming languages.

<h3>Tester module</h3>

This module tests the flip-flop by generating the clock and D signal of the timing diagram above and dumping the Q and QN signals of the flip-flop. It's outputs are the flip-flop's inputs and viceversa.

```
flip-flop
module tester(q,qn,clk,d);
	input q,qn;
	output clk,d;
	reg clk,d;

	//Run the test once
	initial
	begin
		clk=0;
		//Dump results of the simulation to ff.cvd
		$dumpfile("dff.vcd");
		$dumpvars;
		//Generate input signal d
		   d=0; #9 d=1; #1 d=0; #1 d=1; #2 d=0; #1 d=1; #12 d=0;
		#1 d=1; #2 d=0; #1 d=1; #1 d=0; #1 d=1; #1 d=0; # 7 d=1;
		#8 $finish;
	end

	//Generate periodic clock signal
	always
	begin
		#4 clk=!clk;
	end
endmodule
```

This module is behavioral too as we have initial and always blocks. You should be able to undestand most of the code. However, there are a few new concepts here. The $dumpfile and $dumpvars commands tell the Verilog simulator (more on this ahead) to log the module's variables to the specified file, "dff.vcd" in this case. You may also be wondering what the #s do. These are Verilog delays. The delay the following instruction by a given amount of time. For example, <code>#4 clk=!clk;</code> within an always block changes "clk" every four time units from 0 to 1, producing a square wave. The time unit is a second by default.

Without using delays there is no way of making the program work. This is the way to control time in the design. You may add delays to any instruction. For example, you could model the flip-flop's delay by adding some to its always block. It's now easy to understand how the <code>d=0; #9 d=1; #1 d=0; #1 d=1; ...</code> lines produce the D signal we want.

Finally, the $finish command tells the simulator to stop the simulation once the D signal was generated. If this command was omitted the simulation would continue indefinetly because this time the always block has no condition (there is no @ like in the flip-flop module).

<h3>Testbench module</h3>

This module just connects the tester module to the flip-flop module:

```
module
module testbench;
	wire clk,d,q,qn;
	dff ff1(d,clk,q,qn);
	tester tst1(q,qn,clk,d);
endmodule
```

It is the most simple of the modules, but it's very different. This time it's structural code, that is, you define the structure of the circuit. It's like describing the circuit diagram. In this case the final circuit is simply the flip-flop connected to the tester. To create a flip flop use <code>dff ff1(d,clk,q,qn);</code>. First goes the module name, followed by the part name, which could be almost any string, followed by the wires that connect to the module in parenthesis. These must follow the order in the module's declaration. In a structural module we use wires. Regs are not necessary because they are defined inside the different modules.

<h2>Compiling and simulating</h2>

Go ahead and copy/paste the modules into a text file, order doesn't matter. Call the file "dff.v". The .v extension is standard for Verilog files, but isn't required by the compiler. To compile open a Command Prompt at your working directory (where you saved the file). A quick way to open a command prompt at any directory is to hold shift and right-click the folder, then click "Open Command Window Here". Type:

<pre class="lang:batch decode:true">iverilog -o dff dff.v</pre>

The "-o" tells Icarus Verilog to "save output to the following file". The output is then saved to "dff". This file is not executable. It has to be run using vvp, the Icarus Verilog simulator which is the one that actually produces simulation results, zeros and ones for each of the model variables, as a function of time. To run the simulation type:

<pre class="lang:batch decode:true">vvp dff</pre>

This is what outputs the dff.vcd file with all the simulation results. However if you open this file with your text editor you'll see it's not easy to understand. To generate an easy-to-understand timing diagram from this file we use GTKWave.

GTKWave does have a GUI. To open it press Windows key and type "gtkwave". Then click File -&gt; Open New Tab and chose the ffd.vcd file. Now you must add the variables in order to see their timing diagram. Click on "testbench" at the left (SST panel) and then select all the variables using Ctrl or Shift and "Insert" them.

If everything is okay you should get a timing diagram exactly as the one at the beggining of the tutorial, just like the following:

<img class="aligncenter size-large wp-image-143" alt="Icarus Verilog simulation results shown using GTKWave" src="http://localhost:8888/cid/wp-content/uploads/2013/08/simulation2-640x264.png" width="640" height="264" />

When testing your programs you'll have to go to the compiling-simulating-loading process every few minutes. Remember you can use the up-down arrow keys while in the command prompt to access the last commands and compile/simulate. On GTKWave use File->Reload Waveform to reload the .vcd file and refresh the timing diagrams without having to reload each variable. By using these tips the whole proccess will take you a few seconds.

It's over. Now feel free to change the code around to see what happens. Mastering the use of delays, wires and regs takes some time. See <a href="http://www.asic-world.com/verilog/verilog_one_day.html" title="Verilog in One Day">Verilog in One Day</a> for a more in depth explanation of the language.
