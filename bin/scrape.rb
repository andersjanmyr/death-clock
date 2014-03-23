require 'rubygems'
require 'mechanize'
require 'json'

agent = Mechanize.new

arr = []
id = 0
40.times do |i|
  url = "http://www.brainyquote.com/quotes/topics/topic_death#{i}.html?vm=l"
  page = agent.get(url)
  page.search('.boxyPaddingBig').each do |item|
    arr.push({
      id: id,
      quote: item.css('[title="view quote"]').text(),
      author: item.css('[title="view author"]').text()
    })
    id += 1
  end
end

puts JSON.pretty_generate(arr)


