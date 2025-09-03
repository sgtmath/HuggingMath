
import React, { useState, useCallback } from 'react';
import { generateProblem, generateSolution } from '../services/geminiService';
import { LoadingSpinner } from './icons/LoadingSpinner';

const ProblemOfTheDay: React.FC = () => {
  const [problem, setProblem] = useState<string | null>(null);
  const [solution, setSolution] = useState<string | null>(null);
  const [isLoadingProblem, setIsLoadingProblem] = useState<boolean>(false);
  const [isLoadingSolution, setIsLoadingSolution] = useState<boolean>(false);
  const [showSolution, setShowSolution] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateProblem = useCallback(async () => {
    setIsLoadingProblem(true);
    setError(null);
    setProblem(null);
    setSolution(null);
    setShowSolution(false);
    try {
      const generatedProblem = await generateProblem();
      setProblem(generatedProblem);
    } catch (e) {
      setError('Failed to generate a problem. Please check your API key and try again.');
      console.error(e);
    } finally {
      setIsLoadingProblem(false);
    }
  }, []);

  const handleToggleSolution = useCallback(async () => {
    if (showSolution) {
      setShowSolution(false);
      return;
    }

    if (solution) {
      setShowSolution(true);
      return;
    }

    if (!problem) return;

    setIsLoadingSolution(true);
    setError(null);
    try {
      const generatedSolution = await generateSolution(problem);
      setSolution(generatedSolution);
      setShowSolution(true);
    } catch (e) {
      setError('Failed to generate the solution. Please try again.');
      console.error(e);
    } finally {
      setIsLoadingSolution(false);
    }
  }, [problem, solution, showSolution]);
  
  const formatText = (text: string) => {
    return text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));
  };


  return (
    <section id="potd" className="py-20 bg-brand-dark text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif">Problem of the Day</h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Challenge yourself with an AI-generated Olympiad problem.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white/10 p-8 rounded-lg shadow-2xl">
          <div className="text-center mb-6">
            <button
              onClick={handleGenerateProblem}
              disabled={isLoadingProblem}
              className="bg-brand-accent hover:bg-brand-accent-light text-brand-dark font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 disabled:bg-slate-500 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
            >
              {isLoadingProblem ? <><LoadingSpinner /> Generating...</> : 'Generate New Problem'}
            </button>
          </div>

          {error && <div className="bg-red-500/50 text-white p-4 rounded-md text-center">{error}</div>}
          
          {problem && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold font-serif mb-4 text-brand-accent-light">Problem:</h3>
              <div className="bg-black/20 p-6 rounded-md prose prose-invert max-w-none">
                <p className="text-slate-200 text-lg leading-relaxed">{formatText(problem)}</p>
              </div>
              
              <div className="text-center mt-6">
                <button
                  onClick={handleToggleSolution}
                  disabled={isLoadingSolution}
                  className="text-brand-accent-light border border-brand-accent-light/50 hover:bg-brand-accent-light/10 font-bold py-2 px-6 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
                >
                  {isLoadingSolution ? <><LoadingSpinner /> Thinking...</> : (showSolution ? 'Hide Solution' : 'Show Solution')}
                </button>
              </div>

              {showSolution && solution && (
                 <div className="mt-6 animate-fade-in">
                    <h3 className="text-xl font-semibold font-serif mb-4 text-brand-accent-light">Solution:</h3>
                    <div className="bg-black/20 p-6 rounded-md prose prose-invert max-w-none">
                      <p className="text-slate-200 leading-relaxed whitespace-pre-wrap">{formatText(solution)}</p>
                    </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProblemOfTheDay;
